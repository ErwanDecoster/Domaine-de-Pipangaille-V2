/* global document, HTMLElement, URLSearchParams, Event */
/**
 * Filter system for activities and restaurants
 * Manages filtering, pagination, and URL state synchronization
 */

interface FilterState {
  category: string | null;
  restaurantCategory: string | null;
  activitiesPage: number;
  restaurantsPage: number;
}

const ITEMS_PER_PAGE = 6;

export function initializeFilterSystem() {
  // Get DOM elements
  const activitiesCards = Array.from(
    document.querySelectorAll<HTMLElement>("[data-kind='activity']"),
  );
  const restaurantsCards = Array.from(
    document.querySelectorAll<HTMLElement>("[data-kind='restaurant']"),
  );
  const activitiesNav = document.querySelector<HTMLElement>(
    "[data-nav='activities']",
  );
  const restaurantsNav = document.querySelector<HTMLElement>(
    "[data-nav='restaurants']",
  );

  // Initialize state from URL
  const params = new URLSearchParams(globalThis.location.search);
  const state: FilterState = {
    category: params.get("category"),
    restaurantCategory: params.get("restaurantCategory"),
    activitiesPage:
      Number.parseInt(params.get("activitiesPage") || "1", 10) || 1,
    restaurantsPage:
      Number.parseInt(params.get("restaurantsPage") || "1", 10) || 1,
  };

  /**
   * Paginates and displays cards for a given page
   */
  const paginateCards = (
    cards: HTMLElement[],
    page: number,
    nav: HTMLElement | null,
  ): number => {
    const maxPage = Math.max(1, Math.ceil(cards.length / ITEMS_PER_PAGE));
    const safePage = Math.min(page, maxPage);
    const start = (safePage - 1) * ITEMS_PER_PAGE;

    // Hide all cards
    cards.forEach((card) => card.classList.add("hidden"));

    // Show cards for current page
    cards
      .slice(start, start + ITEMS_PER_PAGE)
      .forEach((card) => card.classList.remove("hidden"));

    // Update pagination buttons
    nav?.querySelectorAll<HTMLElement>("[data-page]").forEach((btn) => {
      const p = Number(btn.dataset.page);
      btn.style.display = p <= maxPage ? "" : "none";
      btn.classList.toggle("is-active", p === safePage);
    });

    // Show/hide navigation
    if (nav) nav.style.display = maxPage > 1 ? "" : "none";

    return safePage;
  };

  /**
   * Applies current state: filtering and pagination
   */
  const applyState = () => {
    // Filter activities
    const filteredActivities = state.category
      ? activitiesCards.filter((card) =>
          (card.dataset.categories || "").split(",").includes(state.category!),
        )
      : activitiesCards;

    state.activitiesPage = paginateCards(
      filteredActivities,
      state.activitiesPage,
      activitiesNav,
    );

    // Hide filtered out activities
    activitiesCards
      .filter((c) => !filteredActivities.includes(c))
      .forEach((c) => c.classList.add("hidden"));

    // Filter restaurants
    const filteredRestaurants = state.restaurantCategory
      ? restaurantsCards.filter((card) =>
          (card.dataset.categories || "")
            .split(",")
            .includes(state.restaurantCategory!),
        )
      : restaurantsCards;

    state.restaurantsPage = paginateCards(
      filteredRestaurants,
      state.restaurantsPage,
      restaurantsNav,
    );

    // Hide filtered out restaurants
    restaurantsCards
      .filter((c) => !filteredRestaurants.includes(c))
      .forEach((c) => c.classList.add("hidden"));

    // Update filter button states
    document.querySelectorAll<HTMLElement>("[data-value]").forEach((btn) => {
      const action = btn.dataset.action;
      if (action === "filter-restaurants") {
        btn.classList.toggle(
          "is-active",
          (btn.dataset.value || null) === (state.restaurantCategory || null),
        );
      } else if (action === "filter") {
        btn.classList.toggle(
          "is-active",
          (btn.dataset.value || null) === (state.category || null),
        );
      }
    });

    // Sync state to URL
    const url = new URL(globalThis.location.href);
    [
      "category",
      "restaurantCategory",
      "activitiesPage",
      "restaurantsPage",
    ].forEach((k) => url.searchParams.delete(k));

    if (state.category) url.searchParams.set("category", state.category);
    if (state.restaurantCategory)
      url.searchParams.set("restaurantCategory", state.restaurantCategory);
    if (state.activitiesPage > 1)
      url.searchParams.set("activitiesPage", String(state.activitiesPage));
    if (state.restaurantsPage > 1)
      url.searchParams.set("restaurantsPage", String(state.restaurantsPage));

    globalThis.history.replaceState({}, "", url);
  };

  /**
   * Handles activity filter button clicks
   */
  const handleActivityFilterClick = (e: Event) => {
    state.category = (e.currentTarget as HTMLElement).dataset.value || null;
    state.activitiesPage = 1;
    applyState();
    document
      .getElementById("activities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Handles restaurant filter button clicks
   */
  const handleRestaurantFilterClick = (e: Event) => {
    state.restaurantCategory =
      (e.currentTarget as HTMLElement).dataset.value || null;
    state.restaurantsPage = 1;
    applyState();
    document
      .getElementById("restaurants")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  /**
   * Handles activity pagination clicks
   */
  const handleActivityPageClick = (e: Event) => {
    const page = Number((e.currentTarget as HTMLElement).dataset.page);
    if (!Number.isNaN(page)) {
      state.activitiesPage = page;
      applyState();
      document
        .getElementById("activities")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Handles restaurant pagination clicks
   */
  const handleRestaurantPageClick = (e: Event) => {
    const page = Number((e.currentTarget as HTMLElement).dataset.page);
    if (!Number.isNaN(page)) {
      state.restaurantsPage = page;
      applyState();
      document
        .getElementById("restaurants")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Register event listeners
  document
    .querySelectorAll<HTMLElement>("[data-action='filter']")
    .forEach((btn) => {
      btn.addEventListener("click", handleActivityFilterClick);
    });

  document
    .querySelectorAll<HTMLElement>("[data-action='filter-restaurants']")
    .forEach((btn) => {
      btn.addEventListener("click", handleRestaurantFilterClick);
    });

  document
    .querySelectorAll<HTMLElement>("[data-action='activity-page']")
    .forEach((btn) => {
      btn.addEventListener("click", handleActivityPageClick);
    });

  document
    .querySelectorAll<HTMLElement>("[data-action='restaurant-page']")
    .forEach((btn) => {
      btn.addEventListener("click", handleRestaurantPageClick);
    });

  // Initial apply
  applyState();
}

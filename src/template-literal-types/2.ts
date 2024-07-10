type Route = `/${string}`;
const myRoute: Route = "/home";
const badRoute: Route = "home"; // red squiggly line under badRoute

// Type '"home"' is not assignable to type `Route`
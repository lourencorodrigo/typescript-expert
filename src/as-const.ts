const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const;

// With `as const` we can't change the values of the object
routes.home = '/home'; // Error

type Route = (typeof routes)[keyof typeof routes];

const goToRoute = (route: Route) => {
  console.log(route)
}

goToRoute(routes.about); // OK
goToRoute('/about'); // OK
goToRoute('/'); // OK
goToRoute(routes.home); // OK
goToRoute('/users'); // Error

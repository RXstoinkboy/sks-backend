const USERS_ROUTE = '/users';

export const ROUTES = {
   main: '/',
   users: {
      main: USERS_ROUTE,
      user: `${USERS_ROUTE}/:id`,
   },
};

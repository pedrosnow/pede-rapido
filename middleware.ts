import withAuth, { NextRequestWithAuth } from "next-auth/middleware";
import { headers } from 'next/headers'
// import Jwt from "jsonwebtoken";



export default withAuth(
	function middleware(req) {
		return null;
	},
	{
		callbacks: {
			authorized: ({ token, req }) => {

				const pathNameBlock = ['/page/meu/pedido']

				const result = pathNameBlock.find((dd) => dd == req.nextUrl.pathname)


				if (result) {
					if (token) {
						return true
					} else {

						return false
					}

				} else {
					return true
				}

			},
		},
	}
);




// export const config = {};

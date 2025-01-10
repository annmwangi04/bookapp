import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Correct import
import getBaseUrl from "../../../utils/baseURL"; // Ensure correct path

const ordersApi = createApi({
    reducerPath: 'ordersApi', // Ensure consistent reducerPath
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
        credentials: 'include'
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: builder.mutation({ // Fix builder.mutation syntax
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
                credentials: 'include',
            })
        })
    })
});

export const { useCreateOrderMutation } = ordersApi; // Ensure correct export

export default ordersApi; // Ensure consistent export

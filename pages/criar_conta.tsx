import jwt_decode from "jwt-decode";
import { CreateAccountContainer } from "../container";
import type { GetServerSideProps, NextPage } from "next";

const CreateAccount: NextPage = () => <CreateAccountContainer />;

export default CreateAccount;

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
// 	const token = req.cookies["livn_auth"];
// 	let user: any;

// 	if (!token) {
// 		return { props: {} };
// 	}

// 	try {
// 		user = jwt_decode(token);
// 	} catch (error) {
// 		user = null;
// 	}

// 	return !user
// 		? { props: {} }
// 		: {
// 				redirect: {
// 					permanent: false,
// 					destination:
// 						!user?.investor_pf && !user?.investor_pj
// 							? "/registrar"
// 							: "/oportunidades",
// 				},
// 				props: { user, token },
// 		  };
// };

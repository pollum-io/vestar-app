import type { GetServerSideProps, NextPage } from "next";
import { Change_PasswordContainer } from "../container";
import { fetchCodeVerify } from "../services/fetchCodeVerify";

const Change_Password: NextPage = () => <Change_PasswordContainer />;

export default Change_Password;

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}) => {
	const host = req.headers.host;
	const response = fetchCodeVerify(query, host);
	return {
		props: {
			host,
		},
	};
};

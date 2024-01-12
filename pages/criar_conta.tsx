import jwt_decode from "jwt-decode";
import { CreateAccountContainer } from "../container";
import type { GetServerSideProps, NextPage } from "next";

const CreateAccount: NextPage = () => <CreateAccountContainer />;

export default CreateAccount;

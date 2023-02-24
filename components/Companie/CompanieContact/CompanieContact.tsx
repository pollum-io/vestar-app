import { FunctionComponent } from "react";
import { ICompanieContact } from "./dto";
import { Flex, Text } from "@chakra-ui/react";
import { FaGlobe, FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp, BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export const CompanieContact: FunctionComponent<ICompanieContact> = ({
  website,
  whats,
  phone,
  email,
  instagram,
  twitter,
  telegram,
  facebook,
}) => {
  const infos = [
    {
      valid: website ? true : false,
      content: website,
      icon: <FaGlobe size={24} color="#007D99" />,
      id: 1,
    },
    {
      valid: whats ? true : false,
      content: whats,
      icon: <BsWhatsapp size={24} color="#007D99" />,
      id: 2,
    },
    {
      valid: phone ? true : false,
      content: phone,
      icon: <BsFillTelephoneFill size={23} color="#007D99" />,
      id: 3,
    },
    {
      valid: email ? true : false,
      content: email,
      icon: <MdEmail size={26} color="#007D99" />,
      id: 4,
    },
    {
      valid: instagram ? true : false,
      content: instagram,
      icon: <AiFillInstagram size={26} color="#007D99" />,
      id: 5,
    },
    {
      valid: twitter ? true : false,
      content: twitter,
      icon: <AiOutlineTwitter size={26} color="#007D99" />,
      id: 6,
    },
    {
      valid: telegram ? true : false,
      content: telegram,
      icon: <FaTelegramPlane size={24} color="#007D99" />,
      id: 7,
    },
    {
      valid: facebook ? true : false,
      content: facebook,
      icon: <BsFacebook size={24} color="#007D99" />,
      id: 8,
    },
  ];

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      padding="1.5rem"
      gap="1.5rem"
      w="23.125rem"
      h="max-content"
      border="0.0625rem solid #E5E7EB"
      boxShadow="0rem 1.25rem 1.5625rem rgba(31, 41, 55, 0.1), 0rem 0.625rem 0.625rem rgba(31, 41, 55, 0.04)"
      borderRadius="0.75rem"
      bgColor="#ffffff"
    >
      {infos.map(item => (
        <Flex
          display={item.valid === true ? "flex" : "none"}
          key={item.id}
          gap="1rem"
          alignItems="center"
        >
          <Flex>{item.icon}</Flex>
          <Text
            fontFamily="Poppins"
            fontSize="0.875rem"
            lineHeight="1.25rem"
            color="#171923"
          >
            {item.content}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

import { Button, Flex, Img, Text } from "@chakra-ui/react";
import { useState } from "react";
import { DefaultInput } from "../../components";
import { DefaultTemplate } from "../DefaultTemplate";

export const Edit_ProfileContainer = () => {
	const [pagePath, setPagePath] = useState("personal");
	const [isDisabled, setIsDisabled] = useState(true);
	const [isMarried, setIsMarried] = useState(true);
	return (
		<DefaultTemplate>
			<Flex
				w="100%"
				alignItems="center"
				justifyContent="center"
				px={["unset", "unset", "2rem", "5rem"]}
				pt="6.25rem"
				pb="7rem"
			>
				<Flex
					w="100%"
					maxWidth="70rem"
					justifyContent="space-between"
					gap={["unset", "unset", "2rem", "2rem", "2rem"]}
				>
					<Flex>
						<Button
							w="8.4375rem"
							h="2.25rem"
							borderRadius="0rem"
							bgColor="transparent"
							borderLeft={
								pagePath === "personal" ? "0.125rem solid #007D99" : "none"
							}
							color={pagePath === "personal" ? "#007D99" : "#4A5568"}
							_hover={{ color: "#007D99" }}
							_active={{}}
							fontFamily="Poppins"
							fontWeight="500"
							fontSize="0.875rem"
							lineHeight="1.25rem"
							onClick={() => setPagePath("personal")}
						>
							Dados Pessoais
						</Button>
					</Flex>
					<Flex w="100%" justifyContent="end">
						<Flex
							flexDirection="column"
							gap="2.75rem"
							w="100%"
							maxWidth="47.4375rem"
						>
							<Flex gap="1.5rem" alignItems="center">
								<Img src="icons/Avatar.png" w="6rem" h="6rem" />
								<Text
									fontFamily="Poppins"
									fontWeight="600"
									fontSize="1.5rem"
									lineHeight="2rem"
									alignItems="center"
									color="#171923"
								>
									Editar Perfil
								</Text>
							</Flex>
							<Flex justifyContent="space-between" w="100%">
								<Flex
									flexDirection="column"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#2D3748"
									w="100%"
									maxWidth="18.5rem"
									gap="1.5rem"
								>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">Nome Completo</Text>
										<Text fontWeight="400">João da Silva e Sousa</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">Nome da Mãe</Text>
										<Text fontWeight="400">Maria da Silva</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">Cidade de Nascimento</Text>
										<Text fontWeight="400">São José dos Campos - SP</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">Data de Nascimento </Text>
										<Text fontWeight="400">10/10/1972</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">CPF</Text>
										<Text fontWeight="400">004.053.079-58</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">RG</Text>
										<Text fontWeight="400">2.056.262</Text>
									</Flex>
									<Flex flexDirection="column" gap="0.25rem">
										<Text fontWeight="500">CNH</Text>
										<Text fontWeight="400">1-45457221</Text>
									</Flex>
								</Flex>
								<Flex
									flexDirection="column"
									gap="1.5rem"
									fontFamily="Poppins"
									fontStyle="normal"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									w="20rem"
								>
									<DefaultInput
										title="Estado Civil"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="Casado"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
									/>
									<DefaultInput
										title="Nome Completo do Cônjuge"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="Fulana da Silva e Sousa"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
										display={isMarried}
									/>
									<DefaultInput
										title="CPF do Cônjuge"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="000.000.000-00"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
										display={isMarried}
									/>
									<DefaultInput
										title="RG do Cônjuge"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="0.000.000"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
										display={isMarried}
									/>
									<DefaultInput
										title="Endereço Residencial"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="Rua, n, Bairro - Cidade"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
									/>
									<DefaultInput
										title="Ocupação Profissional"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="Engenheiro Civil"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
									/>
									<DefaultInput
										title="E-mail"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="100%"
										placeholder="exemplo@exemplo.com"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
									/>
									<DefaultInput
										title="Telefone"
										color="#2D3748"
										placeholderColor="#2D3748"
										bgColor="transparent"
										inputSize="9.875rem"
										placeholder="(48) 99999-9999"
										type="text"
										border="0.0625rem solid #E2E8F0"
										inputColor="#2D3748"
									/>
								</Flex>
							</Flex>
							<Flex w="100%" justifyContent="flex-start">
								<Button
									w="13.375rem"
									h="2rem"
									background="#2D3748"
									borderRadius="0.5rem"
									fontFamily="Poppins"
									fontWeight="500"
									fontSize="0.875rem"
									lineHeight="1.25rem"
									color="#FFFFFF"
									isDisabled={isDisabled}
									_hover={
										isDisabled ? { opacity: "0.3" } : { bgColor: "#171923" }
									}
									_active={{}}
								>
									Salvar Alterações
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</DefaultTemplate>
	);
};

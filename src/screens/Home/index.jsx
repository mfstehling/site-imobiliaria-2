import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Grid,
  Icon,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  FaMoneyBill,
  FaFileInvoice,
  FaBan,
  FaWhatsapp,
  FaMoneyBillWave,
  FaRegFlag,
  FaFileInvoiceDollar,
  FaHome,
  FaExclamationTriangle,
  FaChartLine,
  FaGavel,
  FaHandHoldingHeart,
  FaClipboardCheck,
} from "react-icons/fa"; // Import icons
import { engenheira2 } from "assets/img/brand";

export const Home = () => {
  const risks = [
    { icon: FaMoneyBillWave, text: "Cobrança do IPTU retroativo" },
    { icon: FaRegFlag, text: "Multas por irregularidade" },
    { icon: FaFileInvoiceDollar, text: "Dívidas na Receita Federal" },
    { icon: FaHome, text: "Embarco da obra" },
    {
      icon: FaExclamationTriangle,
      text: "Desvalorização do imóvel em até 40% do valor real",
    },
    { icon: FaChartLine, text: "Despejo e penhora do imóvel" },
    {
      icon: FaGavel,
      text: "Impossibilidade de financiamento para compra e venda",
    },
    {
      icon: FaHandHoldingHeart,
      text: "Impossibilidade de emissão do alvará de funcionamento",
    },
  ];
  console.log(Home);
  return (
    <Box bg="black" color="white" minHeight="100vh">
      <VStack spacing={-1} align="stretch">
        {/* Seções anteriores ... */}
        <Box
          position="relative"
          w="100%"
          h={{ base: "60vh", md: "80vh" }}
          bg="gray.700"
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            p={8}
            zIndex={1}
          >
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mb={6}>
              REGULARIZE O SEU IMÓVEL
            </Text>
            <Heading
              textAlign="center"
              as="h2"
              size={{ base: "lg", md: "2xl" }}
              mt={6}
              mb={6}
              maxW={{ base: "90%", md: "60%" }}
            >
              EVITE MULTAS E VALORIZE O SEU IMÓVEL COM A MRK
            </Heading>
            <Text
              textAlign="center"
              fontSize={{ base: "md", md: "lg" }}
              mb={4}
              maxW={{ base: "90%", md: "80%" }}
            >
              Entre em contato e regularize seu imóvel para aproveitar todos os
              benefícios de um imóvel regularizado
            </Text>
            <Button
              as="a"
              href="https://api.whatsapp.com/send?phone=5531997343382"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="orange"
              size="lg"
              leftIcon={<Icon as={FaWhatsapp} />}
            >
              Entre em contato
            </Button>
          </Flex>
          <Flex position="absolute" bottom="0" h="100%" w="100%">
            <Image
              src={engenheira2}
              alt="Professional man"
              h="100%"
              objectFit="cover" // Ajusta a imagem para cobrir o espaço
              opacity={0.2}
              w="100%"
            />
          </Flex>
        </Box>
        <Box textAlign="center" bg="gray.100" w="100%">
          <Flex align="center" justify="center" p={5}>
            <Box
              w={{ base: "90%", md: "80%" }}
              alignContent="center"
              justifyContent="center"
            >
              <Text
                color="grey"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                mb={4}
              >
                Conheça os riscos de um imóvel irregular:
              </Text>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(4, 1fr)",
                }}
                gap={6}
              >
                {risks.map((risk, index) => (
                  <Box
                    key={index}
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    bg="white"
                  >
                    <Icon as={risk.icon} boxSize={8} color="red.500" />
                    <Text color="grey" mt={2} fontWeight="semibold">
                      {risk.text}
                    </Text>
                  </Box>
                ))}
              </Grid>
              <Button
                as="a"
                href="https://api.whatsapp.com/send?phone=5531997343382"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="orange"
                size="lg"
                leftIcon={<Icon as={FaWhatsapp} />}
                mt={6}
              >
                Entre em contato
              </Button>
            </Box>
          </Flex>
        </Box>
        {/* Seção de Serviços */}
        <Box textAlign="center" bg="gray.100" color="black" w="100%">
          <Flex w="100%" align="center" justify="center" mt="24">
            <Flex w="50%" h="2px" bg="gray.300" align="center" />
          </Flex>
          <Flex
            align="center"
            flexDir="column"
            mt={24}
            w={{ base: "90%", md: "80%" }} // Largura responsiva
            justify="center"
            mx="auto"
          >
            <Heading as="h3" size="lg" mb={6}>
              Precisa de ajuda para regularizar o seu imóvel?
            </Heading>
            <Text mb={6}>
              Veja nossos serviços e entre em contato para que possamos te
              ajudar a tirar suas dúvidas
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)", // 1 coluna em telas pequenas
                md: "repeat(2, 1fr)", // 2 colunas em tablets
                lg: "repeat(3, 1fr)", // 3 colunas em desktops
              }}
              gap={6}
              px={4}
            >
              {/* Repetir os Boxes de serviços aqui */}
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Heading size="md">REGULARIZAÇÃO DE IMÓVEL</Heading>
                <Text>
                  Para imóveis irregulares ou informados em diversas autoridades
                  da Prefeitura.
                </Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Entre em contato
                </Button>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Heading size="md">APROVAÇÃO DE PROJETO NA PREFEITURA</Heading>
                <Text>
                  Elaboração do Projeto Arquitetônico e acompanhamento dos
                  processos para Alvará de Aprovação/Execução.
                </Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Entre em contato
                </Button>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Heading size="md">CERTIFICADO DE NADA CONSTA DE OBRA</Heading>
                <Text>
                  Documentos que atestam a regularidade da construção do imóvel.
                </Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Entre em contato
                </Button>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Heading size="md">
                  CERTIDÃO NEGATIVA DE DÉBITOS DE OBRA (CND)
                </Heading>
                <Text>
                  Documentos emitidos pela Receita Federal e outros órgãos, com
                  termo de quitação de BNS.
                </Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Entre em contato
                </Button>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Heading size="md">AVERBAÇÃO EM CARTÓRIO</Heading>
                <Text>
                  Averbação da certidão para constar a venda, compra e venda de
                  propriedades.
                </Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Entre em contato
                </Button>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Heading size="md">DESDOBRO E UNIFICAÇÃO DE LOTE</Heading>
                <Text>Remembramento ou unificação de lote.</Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                >
                  Entre em contato
                </Button>
              </Box>
              {/* Adicione os outros Boxes de serviços aqui */}
            </Grid>
          </Flex>
        </Box>

        {/* Seção de Benefícios */}
        <Box textAlign="center" py={10} bg="gray.100" color="black">
          <Flex w="100%" align="center" justify="center" mt="24">
            <Flex w="50%" h="2px" bg="gray.300" align="center" />
          </Flex>
          <Flex
            align="center"
            flexDir="column"
            mt={24}
            w={{ base: "90%", md: "80%" }} // Largura responsiva
            justify="center"
            mx="auto"
          >
            <Heading as="h3" size="lg" mb={6}>
              Por que regularizar seu imóvel com MRK Engenharia & Serviços?
            </Heading>
            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                FACILITAMOS O PAGAMENTO:
              </Text>{" "}
              Oferecemos diversas formas de pagamento, podendo ser parcelado em
              até 12x no cartão de crédito, além disso, o pagamento só é
              facilitado após a aprovação da regularização.
            </Text>

            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                SOLUÇÃO PERSONALIZADA:
              </Text>{" "}
              Oferecemos um serviço adaptado às necessidades específicas do seu
              imóvel, garantindo uma regularização tranquila e eficiente.
            </Text>

            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                TRANSPARÊNCIA:
              </Text>{" "}
              Realizamos um trabalho onde documentos e o imóvel são de início o
              processo, caso o imóvel não esteja em regra, informamos o cliente
              antes de fechar o negócio.
            </Text>

            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                PROFISSIONALISMO GARANTIDO:
              </Text>{" "}
              Contamos com uma equipe especializada e devidamente registrada em
              suas classes profissionais.
            </Text>

            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                EVITE MULTAS E PROBLEMAS FUTUROS:
              </Text>{" "}
              Regularizar seu imóvel não é apenas uma medida preventiva, é uma
              garantia de evitar problemas legais futuros e valorizar o seu
              imóvel.
            </Text>

            <Text mb={6}>
              <Text as="span" fontWeight="bold">
                SUPORTE CONTÍNUO:
              </Text>{" "}
              Estamos aqui para responder a todas as suas perguntas e esclarecer
              todo o processo, do início ao fim.
            </Text>
          </Flex>
        </Box>

        {/* Seção de Formas de Pagamento */}
        <Box textAlign="center" bg="gray.100" color="black" w="100%">
          <Heading as="h3" size="lg" mb={6}>
            Forma de pagamento
          </Heading>
          <Flex w="80%" align="center" justify="center" mx="auto">
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)", // 1 coluna em telas pequenas
                md: "repeat(2, 1fr)", // 2 colunas em tablets
                lg: "repeat(3, 1fr)", // 3 colunas em desktops
              }}
              gap={6}
              px={4}
            >
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Text fontFamily="bold" fontSize={24}>
                  PAGAMENTO
                </Text>
                <Text>PIX</Text>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Text fontFamily="bold" fontSize={24}>
                  CARTÃO DE
                </Text>
                <Text>débito/crédito</Text>
              </Box>
              <Box borderWidth={1} borderRadius="md" p={4} bg="white">
                <Text fontFamily="bold" fontSize={24}>
                  x12
                </Text>
                <Text>CARTÃO de crédito em até 12x</Text>
              </Box>
            </Grid>
          </Flex>
          <Flex bg="white" mt={24}>
            <Box
              position="relative"
              w="100%"
              h={{ base: "50vh", md: "70vh" }}
              bg="gray.700"
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                p={8}
                zIndex={1}
              >
                <Text
                  color="white"
                  fontSize={{ base: "lg", md: "24" }}
                  w={{ base: "90%", md: "60%" }}
                >
                  Não perca esta oportunidade de valorização do seu imóvel,
                  junte-se a centenas de clientes satisfeitos e regularize o seu
                  imóvel junto com a MRK Engenharia & Serviços. Solicite um
                  orçamento e garanta todos os benefícios de um imóvel regular.
                </Text>
                <Button
                  as="a"
                  href="https://api.whatsapp.com/send?phone=5531997343382"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="orange"
                  size="lg"
                  leftIcon={<Icon as={FaWhatsapp} />}
                  mt={12}
                >
                  Solicite um orçamento
                </Button>
              </Flex>
              <Flex position="absolute" bottom="0" h="100%" w="100%">
                <Image
                  src={engenheira2}
                  alt="Professional man"
                  h="100%"
                  objectFit="cover" // Ajusta a imagem para cobrir o espaço
                  opacity={0.2}
                  w="100%"
                />
              </Flex>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Box>
    // <Box bg="black" color="white" minHeight="100vh">
    //   <VStack spacing={-1} align="stretch">
    //     {/* Seções anteriores ... */}
    //     <Box position="relative" w="100%" h="80vh" bg="gray.700">
    //       <Flex
    //         direction="column"
    //         align="center"
    //         justify="center"
    //         position="absolute"
    //         top="0"
    //         left="0"
    //         right="0"
    //         bottom="0"
    //         p={8}
    //         zIndex={1}
    //       >
    //         <Text fontSize="2xl" fontWeight="bold" mb={24}>
    //           REGULARIZE O SEU IMÓVEL
    //         </Text>
    //         <Heading
    //           textAlign="center"
    //           as="h2"
    //           size="2xl"
    //           mt={18}
    //           mb={24}
    //           maxW="60%"
    //         >
    //           EVITE MULTAS E VALORIZE O SEU IMÓVEL COM A MRK
    //         </Heading>
    //         <Text textAlign="center" fontSize="lg" mb={6} maxW="80%">
    //           Entre em contato e regularize seu imóvel para aproveitar todos os
    //           benefícios de um imóvel regularizado
    //         </Text>
    //         <Button
    //           as="a"
    //           href="https://api.whatsapp.com/send?phone=5531997343382"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           colorScheme="orange"
    //           size="lg"
    //           leftIcon={<Icon as={FaWhatsapp} />}
    //         >
    //           Entre em contato
    //         </Button>
    //       </Flex>
    //       <Flex position="absolute" bottom="0" h="100%" w="100%">
    //         {" "}
    //         <Image
    //           src={engenheira2}
    //           alt="Professional man"
    //           h="100%"
    //           objectFit="fill"
    //           opacity={0.2}
    //           w="100%"
    //         />
    //       </Flex>
    //     </Box>
    //     <Box textAlign="center" bg="gray.100" w="100%">
    //       <Flex align="center" justify="center" p={5}>
    //         <Box w="80%" alignContent="center" justifyContent="center">
    //           <Text color="grey" fontSize="2xl" fontWeight="bold" mb={4}>
    //             Conheça os riscos de um imóvel irregular:
    //           </Text>
    //           <Grid templateColumns="repeat(4, 1fr)" gap={6}>
    //             {risks.map((risk, index) => (
    //               <Box
    //                 key={index}
    //                 p={4}
    //                 borderWidth={1}
    //                 borderRadius="md"
    //                 bg="white"
    //               >
    //                 <Icon as={risk.icon} boxSize={8} color="red.500" />
    //                 <Text color="grey" mt={2} fontWeight="semibold">
    //                   {risk.text}
    //                 </Text>
    //               </Box>
    //             ))}
    //           </Grid>
    //           <Button
    //             as="a"
    //             href="https://api.whatsapp.com/send?phone=5531997343382"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             colorScheme="orange"
    //             size="lg"
    //             leftIcon={<Icon as={FaWhatsapp} />}
    //             mt={6}
    //           >
    //             Entre em contato
    //           </Button>
    //         </Box>
    //       </Flex>
    //     </Box>
    //     {/* Seção de Serviços */}
    //     <Box textAlign="center" bg="gray.100" color="black" w="100%">
    //       <Flex w="100%" align="center" justify="center" mt="24">
    //         <Flex w="50%" h="2px" bg="gray.300" align="center" />
    //       </Flex>
    //       <Flex
    //         align="center"
    //         flexDir="column"
    //         mt={24}
    //         w="80%"
    //         justify="center"
    //         mx="auto"
    //       >
    //         <Heading as="h3" size="lg" mb={6}>
    //           Precisa de ajuda para regularizar o seu imóvel?
    //         </Heading>
    //         <Text mb={6}>
    //           Veja nossos serviços e entre em contato para que possamos te
    //           ajudar a tirar suas dúvidas
    //         </Text>
    //         <Grid
    //           templateColumns={{
    //             base: "repeat(1, 1fr)",
    //             md: "repeat(2, 1fr)",
    //             lg: "repeat(3, 1fr)",
    //           }}
    //           gap={6}
    //           px={4}
    //         >
    //           <Box
    //             borderWidth={1}
    //             borderRadius="md"
    //             p={4}
    //             bg="white"
    //             justifyContent="space-between"
    //             h="210"
    //           >
    //             <Heading h="20%" size="md">
    //               REGULARIZAÇÃO DE IMÓVEL
    //             </Heading>
    //             <Text h="50%">
    //               Para imóveis irregulares ou informados em diversas autoridades
    //               da Prefeitura.
    //             </Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //             >
    //               Entre em contato
    //             </Button>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Heading h="20%" size="md">
    //               APROVAÇÃO DE PROJETO NA PREFEITURA
    //             </Heading>
    //             <Text h="50%">
    //               Elaboração do Projeto Arquitetônico e acompanhamento dos
    //               processos para Alvará de Aprovação/Execução.
    //             </Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //             >
    //               Entre em contato
    //             </Button>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Heading h="20%" size="md">
    //               CERTIFICADO DE NADA CONSTA DE OBRA
    //             </Heading>
    //             <Text h="50%">
    //               Documentos que atestam a regularidade da construção do imóvel.
    //             </Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //             >
    //               Entre em contato
    //             </Button>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white" h="230">
    //             <Heading h="30%" size="md">
    //               CERTIDÃO NEGATIVA DE DÉBITOS DE OBRA (CND)
    //             </Heading>
    //             <Text h="40%">
    //               Documentos emitidos pela Receita Federal e outros órgãos, com
    //               termo de quitação de BNS.
    //             </Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //             >
    //               Entre em contato
    //             </Button>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Heading h="20%" size="md">
    //               AVERBAÇÃO EM CARTÓRIO
    //             </Heading>
    //             <Text h="50%">
    //               Averbação da certidão para constar a venda, compra e venda de
    //               propriedades.
    //             </Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //             >
    //               Entre em contato
    //             </Button>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Heading h="20%" size="md">
    //               DESDOBRO E UNIFICAÇÃO DE LOTE
    //             </Heading>
    //             <Text h="50%">Remembramento ou unificação de lote.</Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //             >
    //               Entre em contato
    //             </Button>
    //           </Box>
    //         </Grid>
    //       </Flex>
    //     </Box>

    //     {/* Seção de Benefícios */}
    //     <Box textAlign="center" py={10} bg="gray.100" color="black">
    //       <Flex w="100%" align="center" justify="center" mt="24">
    //         <Flex w="50%" h="2px" bg="gray.300" align="center" />
    //       </Flex>
    //       <Flex
    //         align="center"
    //         flexDir="column"
    //         mt={24}
    //         w="80%"
    //         justify="center"
    //         mx="auto"
    //       >
    //         <Heading as="h3" size="lg" mb={6}>
    //           Por que regularizar seu imóvel com MRK Engenharia & Serviços?
    //         </Heading>
    //         <Text mb={6}>
    //           <Text as="span" fontWeight="bold">
    //             FACILITAMOS O PAGAMENTO:
    //           </Text>{" "}
    //           {/* Adiciona um espaço */}
    //           Oferecemos diversas formas de pagamento, podendo ser parcelado em
    //           até 12x no cartão de crédito, além disso, o pagamento só é
    //           facilitado após a aprovação da regularização.
    //         </Text>

    //         <Text mb={6}>
    //           <Text as="span" fontWeight="bold">
    //             SOLUÇÃO PERSONALIZADA:
    //           </Text>{" "}
    //           {/* Adiciona um espaço */}
    //           Oferecemos um serviço adaptado às necessidades específicas do seu
    //           imóvel, garantindo uma regularização tranquila e eficiente.
    //         </Text>

    //         <Text mb={6}>
    //           <Text as="span" fontWeight="bold">
    //             TRANSPARÊNCIA:
    //           </Text>{" "}
    //           {/* Adiciona um espaço */}
    //           Realizamos um trabalho onde documentos e o imóvel são de início o
    //           processo, caso o imóvel não esteja em regra, informamos o cliente
    //           antes de fechar o negócio.
    //         </Text>

    //         <Text mb={6}>
    //           <Text as="span" fontWeight="bold">
    //             PROFISSIONALISMO GARANTIDO:
    //           </Text>{" "}
    //           {/* Adiciona um espaço */}
    //           Contamos com uma equipe especializada e devidamente registrada em
    //           suas classes profissionais.
    //         </Text>

    //         <Text mb={6}>
    //           <Text as="span" fontWeight="bold">
    //             EVITE MULTAS E PROBLEMAS FUTUROS:
    //           </Text>{" "}
    //           {/* Adiciona um espaço */}
    //           Regularizar seu imóvel não é apenas uma medida preventiva, é uma
    //           garantia de evitar problemas legais futuros e valorizar o seu
    //           imóvel.
    //         </Text>

    //         <Text mb={6}>
    //           <Text as="span" fontWeight="bold">
    //             SUPORTE CONTÍNUO:
    //           </Text>{" "}
    //           {/* Adiciona um espaço */}
    //           Estamos aqui para responder a todas as suas perguntas e esclarecer
    //           todo o processo, do início ao fim.
    //         </Text>
    //       </Flex>
    //     </Box>

    //     {/* Seção de Formas de Pagamento */}
    //     <Box textAlign="center" bg="gray.100" color="black" w="100%">
    //       <Heading as="h3" size="lg" mb={6}>
    //         Forma de pagamento
    //       </Heading>
    //       <Flex w="80%" align="center" justify="center" mx="auto">
    //         <Grid
    //           templateColumns={{
    //             base: "repeat(1, 1fr)",
    //             md: "repeat(2, 1fr)",
    //             lg: "repeat(3, 1fr)",
    //           }}
    //           gap={6}
    //           px={4}
    //         >
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Text fontFamily="bold" fontSize={24}>
    //               PAGAMENTO
    //             </Text>
    //             <Text>PIX</Text>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Text fontFamily="bold" fontSize={24}>
    //               CARTÃO DE
    //             </Text>
    //             <Text>débito/crédito</Text>
    //           </Box>
    //           <Box borderWidth={1} borderRadius="md" p={4} bg="white">
    //             <Text fontFamily="bold" fontSize={24}>
    //               x12
    //             </Text>
    //             <Text>CARTÃO de crédito em até 12x</Text>
    //           </Box>
    //         </Grid>
    //       </Flex>
    //       <Flex bg="white" mt={24}>
    //         <Box position="relative" w="100%" h="70vh" bg="gray.700">
    //           <Flex
    //             direction="column"
    //             align="center"
    //             justify="center"
    //             position="absolute"
    //             top="0"
    //             left="0"
    //             right="0"
    //             bottom="0"
    //             p={8}
    //             zIndex={1}
    //           >
    //             <Text color="white" fontSize={24} w="60%">
    //               Não perca esta oportunidade de valorização do seu imóvel,
    //               junte-se a centenas de clientes satisfeitos e regularize o seu
    //               imóvel junto com a MRK Engenharia & Serviços. Solicite um
    //               orçamento e garanta todos os benefícios de um imóvel regular.
    //             </Text>
    //             <Button
    //               as="a"
    //               href="https://api.whatsapp.com/send?phone=5531997343382"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               colorScheme="orange"
    //               size="lg"
    //               leftIcon={<Icon as={FaWhatsapp} />}
    //               mt={12}
    //             >
    //               Solicite um orçamento
    //             </Button>
    //           </Flex>
    //           <Flex position="absolute" bottom="0" h="100%" w="100%">
    //             {" "}
    //             <Image
    //               src={engenheira2}
    //               alt="Professional man"
    //               h="100%"
    //               objectFit="fill"
    //               opacity={0.2}
    //               w="100%"
    //             />
    //           </Flex>
    //         </Box>
    //       </Flex>
    //     </Box>
    //   </VStack>
    // </Box>
  );
};

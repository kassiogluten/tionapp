import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Button,
} from "@chakra-ui/react";
import blogPost1 from '../../../public/blog-post1.jpeg'
import Image from "next/image";

export function HeroBlog() {
  return (
    <>
      <Flex as="section" justify="center" align="center" w="100%">
        <Flex
          p="30rem 1rem 1rem"
          align="center"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir="column"
        />
      </Flex>
      <Flex as="section" justify="center" align="center" w="100%" bg="branco">
        <Flex
          // transform={{ base: "translateY(-5%)", md: "translateY(-300px)" }}
          mt="-300px"
          p="5rem 1rem"
          align="left"
          maxW={1000}
          w="full"
          justify="space-between"
          flexDir="column"
          color="azul"
        >
          <Box w="full" maxW={1000} pos="relative" h={424}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              objectPosition="20% center"
              alt="aleatoria"
              src={blogPost1}
            />
          </Box>
          <Heading py={8} color="pessego">
            Com que frequência eu devo lavar o carro?
          </Heading>
          <Box sx={{ p: { py: 2 } }}>
            <Text>
              Há quem, por prazer e orgulho de ver seu carro sempre reluzente,
              goste de dar um bom banho em sua máquina todo fim de semana e
              depois sair por aí exibindo sua joia nas ruas. Outros não ligam
              muito para isso e só levam o carro a um lava-rápido quando a
              sujeira é demais. Mas será que existe um tempo ou uma frequência
              ideal para manter seu carro sempre limpo?
            </Text>
            <Text>
              Com essa pergunta em mente, o AUTO entrou em contato com algumas
              multinacionais especializadas na produção e fornecimento das
              tintas que cobrem a carroceria dos mais variados automóveis ao
              redor do mundo.
            </Text>
            <Text>
              Segundo a alemã BASF, o prazo ideal para a lavagem do carro é a
              cada duas semanas. “A frequência ideal varia de acordo com o nível
              e tipo de sujeira, pois uma sujeira ocasionada pelo excremento de
              pássaros ou resina natural de uma árvore por um período maior que
              uma ou mais semanas pode danificar a pintura de uma forma
              irreversível e somente com o polimento será possível eliminar esta
              marca. Assim que observar uma dessas sujeiras, o ideal é retirá-la
              o quanto antes”, aconselha Fábio Shimozato, gerente do laboratório
              do desenvolvimento da divisão de tintas automotivas.
            </Text>
            <Text>
              Além disso, também é sempre bom evitar o chamado dano químico, que
              é causado por produtos que podem entrar em contato com a pintura
              do carro, como solventes (querosene, piche de asfalto) e
              maresia/água de praia, sendo recomendado lavar a área sempre que
              houver contato com algum desses componentes.
            </Text>
            <Text>
              Ainda segundo a empresa alemã, é interessante destacar que em
              alguns casos a temperatura da superfície do carro chega a 60°C,
              acelerando o processo que causa dano à pintura do veículo. A
              melhor forma de evitar isso é não deixar acumular sujeira na
              carroceria, pois ela faz com que marcas sejam formadas nos locais
              onde está mais concentrada.
            </Text>
            <Text>
              Já a norte-americana PPG informa que não existe um tempo ou padrão
              específico para realizar a lavagem do carro, destacando que
              “depende muito da demanda de sujeira no veículo”. A empresa
              menciona, contudo, que a lavagem deve ser sempre realizada da
              maneira correta para não acarretar prejuízos à carroceria do
              carro.
            </Text>
            <Heading>Lavar demais o carro pode ser ruim? </Heading>
            <Text>
              “Dependendo do tipo de lavagem sim, pois quando há exposição
              excessiva ao atrito causado pelas cerdas do lavador automatizado
              há a possibilidade de causar riscos na pintura. Além disso, deixar
              resíduo de um produto de limpeza que não é indicado para lavagem
              de automóveis não é aconselhável, pois ele pode conter
              ingredientes químicos que favorecem o ataque na superfície da
              pintura. Se o proprietário do veículo faz questão de lavar o carro
              com frequência maior que uma vez por semana, o ideal é simplificar
              com água e um pano e, se necessário, um produto como xampu
              automotivo (neutro)”, destaca Shimozato, gerente da BASF.
            </Text>
            <Text>
              O setor de tintas automotivas da BASF também acrescenta que é
              sempre interessante conferir se na água não há partículas que
              podem riscar o veículo e, de preferência, utilizar produtos de
              limpeza específicos para o carro, evitando produtos para limpeza
              de piso ou banheiro voltados ao uso residencial, por exemplo. O
              ideal, aqui, é utilizar esponjas não abrasivas.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Box,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import { posts } from "../../posts";

export function ContentPrivacidade() {
  return (
    <Flex as="section" justify="center" align="center" w="100%" bg="branco">
      <Flex
        color="azul"
        flexWrap="wrap"
        p="2rem 1rem"
        justify="flex-start"
        align="start"
        maxW={1200}
        w="full"
      >
        <Heading py={8} color="pessego">
          Política de privacidade
        </Heading>
        <Box sx={{ p: { py: 2 }, strong: { mb: 4, lineHeight:10 } }}>
          <p>
            A presente pol&iacute;tica de privacidade se destina a informar aos
            nossos clientes
            <br />
            (&ldquo;Centrais de Transporte&rdquo;) sobre como obtemos,
            armazenamos, utilizamos e compartilhamos as suas
            informa&ccedil;&otilde;es e a de seus clientes, prestadores de
            servi&ccedil;os (&ldquo;Motoristas&rdquo;) e consumidores
            (&ldquo;Passageiros&rdquo;), todos denominados como
            &ldquo;Usu&aacute;rios&rdquo; da nossa plataforma.
            <br />
            <br />
            Ao utilizar os nossos servi&ccedil;os
            (&ldquo;Servi&ccedil;os&rdquo;), os Usu&aacute;rios consentem, de
            forma livre e expressa, que seus dados e informa&ccedil;&otilde;es
            sejam coletados, armazenados, tratados e compartilhados, conforme as
            regras dispostas nesta pol&iacute;tica de privacidade. As regras
            aqui previstas poder&atilde;o ser alteradas a qualquer momento e
            entrar&atilde;o em vigor logo que disponibilizadas para a Central de
            Transporte. O acesso e a utiliza&ccedil;&atilde;o dos
            Servi&ccedil;os ap&oacute;s essa postagem representam o seu
            consentimento em vincular-se &agrave; nova pol&iacute;tica de
            privacidade. CASO N&Atilde;O HAJA CONCORD&Acirc;NCIA COM ALGUMA
            DISPOSI&Ccedil;&Atilde;O AQUI PRESENTE, N&Atilde;O UTILIZE OS
            SERVI&Ccedil;OS.
            <br />
            <br />A prote&ccedil;&atilde;o dos dados e da privacidade dos
            Usu&aacute;rios s&atilde;o muito importantes para n&oacute;s.
            Portanto, recomendamos que as nossas pr&aacute;ticas sejam melhor
            conhecidas e, em caso de d&uacute;vidas, seja realizado contato
            conosco.
          </p>
          <p>
            Os termos e express&otilde;es aqui utilizados t&ecirc;m o mesmo
            significado a eles atribu&iacute;dos no termo de uso (&ldquo;Termos
            de Uso&rdquo;), exceto se de outro modo expressamente aqui indicado.
          </p>
          <ol>
            <li>
              <strong>INFORMA&Ccedil;&Otilde;ES REGISTRADAS</strong>
              <br />
              1.1. Aos utilizarem o Website ou Aplicativo
              (&ldquo;Plataforma&rdquo;) de nossa propriedade, n&oacute;s
              coletamos algumas informa&ccedil;&otilde;es importantes dos
              Usu&aacute;rios para que possamos prestar os servi&ccedil;os
              descritos nos Termos de Uso de forma adequada com base nas
              intera&ccedil;&otilde;es com cada funcionalidade da Plataforma.
              <br />
              <br />
              1.2. Armazenamos informa&ccedil;&otilde;es pessoais transmitidas
              voluntariamente pelo Usu&aacute;rio, que variam conforme o perfil,
              tais como:
              <br />
              (i) Dados do representante legal da plataforma: O licenciamento da
              <br />
              Plataforma importa na vincula&ccedil;&atilde;o todas as
              informa&ccedil;&otilde;es cadastradas no Cadastro de Pessoa
              F&iacute;sica (CPF) ou no Cadastro Nacional de Pessoas
              <br />
              Jur&iacute;dicas (CNPJ) do licenciado, sendo obrigat&oacute;ria a
              apresenta&ccedil;&atilde;o de um representante legal quando o
              licenciamento for efetuado para uma pessoa jur&iacute;dica.
              Al&eacute;m disso, esses dados podem incluir seu nome, e-mail,
              n&uacute;mero de telefone, data de nascimento, n&uacute;meros de
              identifica&ccedil;&atilde;o civil, como habilita&ccedil;&atilde;o
              ou passaporte, se exigido por lei, data de nascimento, foto e
              assinatura.
              <br />
              (ii) Dados do setor financeiro da Plataforma: Iremos coletar
              alguns dados que podem incluir nome, n&uacute;mero de telefone e
              e-mail.
              <br />
              (iii) Dados do administrador legal da plataforma: Iremos coletar
              alguns dados que podem incluir nome e e-mail.
              <br />
              (iv) Dados do usu&aacute;rio da plataforma: Iremos coletar alguns
              dados que podem incluir nome e e-mail.
              <br />
              (v) Dados do usu&aacute;rio aplicativo (Passageiro):
              Poder&atilde;o ser coletados dados quando uma conta no aplicativo
              for criada ou alterada. Esses dados podem incluir nome, e-mail,
              n&uacute;mero de telefone, senha de login, n&uacute;mero de CPF
              entre outras informa&ccedil;&otilde;es.
              <br />
              (vi) Dados do usu&aacute;rio do aplicativo (Motorista):
              Poder&atilde;o ser coletados dados quando uma conta no aplicativo
              for criada ou alterada. Esses dados podem incluir nome, e-mail,
              n&uacute;mero de telefone, data de nascimento, dados
              banc&aacute;rios, dados de ve&iacute;culo (Placa, modelo, ano ou
              cor), IMEI do dispositivo (Principal e secund&aacute;rio), senha
              de login, endere&ccedil;o residencial (Rua, bairro, cidade,
              n&uacute;mero, UF, CEP e informa&ccedil;&otilde;es adicionais),
              n&uacute;mero de CPF, fotos do ve&iacute;culo e/ou usu&aacute;rio
              (Alvar&aacute;, atestado de antecedentes criminais e etc),
              n&uacute;meros de identifica&ccedil;&atilde;o civil, como
              habilita&ccedil;&atilde;o ou passaporte, se exigido por lei, data
              de nascimento, foto e assinatura entre outras
              informa&ccedil;&otilde;es.
              <br />
              <br />
              1.3. Armazenamos, ainda, informa&ccedil;&otilde;es gerais
              relacionadas ao uso da
              <br />
              Plataforma pelo Usu&aacute;rio, tais como:
              <br />
              (i) informa&ccedil;&otilde;es de utiliza&ccedil;&atilde;o:
              servi&ccedil;os contratados, profissionais solicitados, trajetos
              realizados, valores, data, hora e local de
              contrata&ccedil;&atilde;o dos servi&ccedil;os,
              correspond&ecirc;ncias eletr&ocirc;nicas, bem como o resultado do
              processamento das transa&ccedil;&otilde;es junto ao processador de
              pagamentos;
              <br />
              (ii) informa&ccedil;&otilde;es de acesso: datas e hor&aacute;rios
              de cada a&ccedil;&atilde;o e acesso, IP, dados de
              geolocaliza&ccedil;&atilde;o, dados de erros,
              informa&ccedil;&otilde;es sobre o dispositivo utilizado,
              vers&atilde;o de sistema operacional e navegador, session ID,
              al&eacute;m de servi&ccedil;os que o Usu&aacute;rio utiliza e como
              os usa;
              <br />
              <br />
              1.4. Se combinarmos informa&ccedil;&otilde;es pessoais com
              informa&ccedil;&otilde;es gerais, a<br />
              informa&ccedil;&atilde;o ser&aacute; tratada como
              informa&ccedil;&atilde;o pessoal enquanto essa
              informa&ccedil;&atilde;o permanecer combinada.
              <br />
              <br />
            </li>
            <li>
              <strong>ARMAZENAMENTO DE INFORMA&Ccedil;&Otilde;ES</strong>
              <br />
              2.1. Todos os dados e informa&ccedil;&otilde;es coletadas dos
              visitantes ser&atilde;o incorporadas ao banco de dados da Gaudium,
              de responsabilidade da GAUDIUM DESENVOLVIMENTO DE SOFTWARE LTDA,
              sociedade empres&aacute;ria inscrita no CNPJ sob o n&ordm;
              08.587.794/0001-43, com sede na Rua da Assembleia, n&ordm; 10,
              sala 2513, Centro, Rio de Janeiro/RJ, CEP: 20011-901.
              <br />
              <br />
              2.2. Os dados e informa&ccedil;&otilde;es coletados tamb&eacute;m
              poder&atilde;o ser incorporados ao banco de dados da Central de
              Transportes.
              <br />
              <br />
            </li>
            <li>
              <strong>
                UTILIZA&Ccedil;&Atilde;O DE INFORMA&Ccedil;&Otilde;ES
                <br />
              </strong>
              3.1. Podemos utilizar as informa&ccedil;&otilde;es coletadas em
              todos os Servi&ccedil;os para fornecer, manter, proteger, melhorar
              e desenvolver os Servi&ccedil;os.
              <br />
              <br />
              3.2. As informa&ccedil;&otilde;es podem ser utilizadas para fins
              internos visando o<br />
              aprimoramento dos Servi&ccedil;os, tais como pesquisa e
              desenvolvimento, auditoria, an&aacute;lise de dados e pesquisas
              para aprimorar os Servi&ccedil;os e comunica&ccedil;&otilde;es com
              os clientes, al&eacute;m de gera&ccedil;&atilde;o de
              an&aacute;lises estat&iacute;sticas, incluindo tend&ecirc;ncias de
              consumo, para os quais os dados pessoais ser&atilde;o
              anonimizados.
              <br />
              <br />
              3.3. As informa&ccedil;&otilde;es tamb&eacute;m podem ser
              utilizadas e compartilhadas com os nossos parceiros que
              eventualmente nos prestem servi&ccedil;os de processamento de
              informa&ccedil;&otilde;es, armazenamento de banco de dados,
              atendimento ao cliente, condu&ccedil;&atilde;o de pesquisa de
              mercado, pesquisas de satisfa&ccedil;&atilde;o ou outros
              servi&ccedil;os relacionados com o aprimoramento da Plataforma,
              bem como para oferecer ao Usu&aacute;rio um conte&uacute;do
              espec&iacute;fico que entendemos ser de seu interesse como, por
              exemplo, envio e-mails e mensagens de texto personalizadas.
              <br />
              <br />
              3.4. Ao enviar coment&aacute;rios e feedback com
              rela&ccedil;&atilde;o &agrave; Plataforma, os nossos clientes nos
              autorizam a publicar e utilizar tais coment&aacute;rios e
              feedbacks em quaisquer materiais de marketing ou publicidade, bem
              como a analisar, processar e tratar esse feedback de forma isolada
              ou agregada nos termos desta pol&iacute;tica de privacidade. Para
              tanto, apenas identificaremos o Usu&aacute;rio atrav&eacute;s de
              seu nome de cadastro, empresa e cidade.
              <br />
              <br />
              3.5. N&oacute;s podemos tamb&eacute;m utilizar esses dados
              coletados para aprimorar a seguran&ccedil;a, bem como melhorar os
              Servi&ccedil;os e as ofertas. Dessa forma, podemos analisar e
              solucionar problemas t&eacute;cnicos, bem como identificar e
              coibir fraudes na utiliza&ccedil;&atilde;o dos nossos
              Servi&ccedil;os.
              <br />
              <br />
              3.6. Nas hip&oacute;teses de cumprimento de ordem legal ou
              judicial e de atendimento &agrave; requisi&ccedil;&atilde;o de
              autoridades policiais ou ministeriais, na forma da lei, assim como
              para constituir, defender ou exercer regularmente direitos em
              &acirc;mbito judicial ou administrativo poder&atilde;o ser
              utilizados dados extra&iacute;dos das intera&ccedil;&otilde;es dos
              Usu&aacute;rios.
              <br />
              <br />
              3.7. Salientamos que solicitaremos a autoriza&ccedil;&atilde;o de
              nossos Usu&aacute;rios antes de usar informa&ccedil;&otilde;es
              para outros fins que n&atilde;o os definidos nesta pol&iacute;tica
              de privacidade. A escolha da administradora de cart&otilde;es,
              adquirente e gateway &eacute; de nossa inteira compet&ecirc;ncia e
              responsabilidade, e podemos alter&aacute;-la sem qualquer consulta
              ou autoriza&ccedil;&atilde;o pr&eacute;via dos Usu&aacute;rios.
              <br />
              <br />
              3.8. A Gaudium se utiliza de tecnologias como cookies, pixel tags,
              armazenamento local ou outros identificadores, tanto de
              dispositivos m&oacute;veis ou n&atilde;o, ou tecnologias
              semelhantes (&ldquo;cookies e outras tecnologias&rdquo;), para
              autenticar a sua conta, promover e aperfei&ccedil;oar os
              Servi&ccedil;os, personalizar a sua experi&ecirc;ncia e avaliar a
              efic&aacute;cia da nossa comunica&ccedil;&atilde;o e publicidade.
              <br />
              <br />
            </li>
            <li>
              <strong>
                SEGURAN&Ccedil;A NO ARMAZENAMENTO
                <br />
              </strong>
              4.1. As informa&ccedil;&otilde;es que coletamos s&atilde;o
              armazenadas em servi&ccedil;os de nuvem confi&aacute;veis de
              parceiros que podem estar localizados no Brasil ou em outros
              pa&iacute;ses que ofere&ccedil;am servi&ccedil;o de armazenamento
              de nuvem confi&aacute;veis e usualmente utilizados por empresas de
              tecnologia, tais como Estados Unidos da Am&eacute;rica (EUA) e em
              pa&iacute;ses da Am&eacute;rica Latina e da Europa.
              <br />
              <br />
              4.2. Na contrata&ccedil;&atilde;o desses servi&ccedil;os, a
              Gaudium sempre busca empresas que empregam alto n&iacute;vel de
              seguran&ccedil;a no armazenamento de suas
              informa&ccedil;&otilde;es, estabelecendo contratos que n&atilde;o
              violam as defini&ccedil;&otilde;es de privacidade previstas nessa
              pol&iacute;tica e as leis brasileiras aplic&aacute;veis.
              <br />
              <br />
              4.3. Trabalhamos com afinco para proteger a Gaudium e nossos
              Usu&aacute;rios de acesso n&atilde;o autorizado ou
              altera&ccedil;&atilde;o, divulga&ccedil;&atilde;o ou
              destrui&ccedil;&atilde;o n&atilde;o autorizada das
              informa&ccedil;&otilde;es que detemos e restringimos o acesso
              &agrave;s informa&ccedil;&otilde;es pessoais &agrave;s pessoas
              qualificadas e autorizadas pela Gaudium, que est&atilde;o sujeitas
              a rigorosas obriga&ccedil;&otilde;es contratuais de
              confidencialidade, podendo ser processados ou dispensados se
              deixarem de cumprir tais obriga&ccedil;&otilde;es.
              <br />
              <br />
              4.4. Oferecemos aos nossos Usu&aacute;rios uma etapa de
              verifica&ccedil;&atilde;o quando acessa sua conta e analisamos
              nossa coleta de informa&ccedil;&otilde;es, pr&aacute;ticas de
              armazenamento e processamento, inclusive medidas de
              seguran&ccedil;a f&iacute;sica, para prote&ccedil;&atilde;o contra
              acesso n&atilde;o autorizado aos sistemas.
              <br />
              <br />
              4.5. Considerando que nenhum sistema de seguran&ccedil;a &eacute;
              absolutamente seguro, a Gaudium se exime de quaisquer
              responsabilidades por eventuais danos e/ou preju&iacute;zos
              decorrentes de falhas, v&iacute;rus ou invas&otilde;es ao banco de
              dados, salvo nos casos de dolo ou culpa da empresa. Ressalta-se,
              no entanto, que utilizamos uma tecnologia de seguran&ccedil;a que
              invalida tokens gerados de maneira indevida.
              <br />
              <br />
              4.6. Eventual comprometimento consciente dos dados de acesso,
              senha e/ou informa&ccedil;&otilde;es de pagamento dever&aacute;
              ser imediatamente informado, por nossos Usu&aacute;rios para
              &agrave; Gaudium, para que seja poss&iacute;vel a
              realiza&ccedil;&atilde;o de todos os procedimentos de
              seguran&ccedil;a dispon&iacute;veis.
              <br />
              <br />
            </li>
            <li>
              <strong>
                PRIVACIDADE DO USU&Aacute;RIO
                <br />
              </strong>
              5.1. As pessoas t&ecirc;m diferentes preocupa&ccedil;&otilde;es
              sobre privacidade. Permitimos que os nossos Usu&aacute;rios editem
              algumas informa&ccedil;&otilde;es pessoais, obedecendo &agrave;s
              configura&ccedil;&otilde;es da Central de Transporte.
              <br />
              <br />
              5.2. As informa&ccedil;&otilde;es pessoais dos usu&aacute;rios
              passageiros e usu&aacute;rios motoristas dever&atilde;o ser
              protegidas por nossos Usu&aacute;rios, Centrais de Transporte,
              com, no m&iacute;nimo, o mesmo grau de cuidado,
              precau&ccedil;&atilde;o e zelo dispensados &agrave;s suas
              pr&oacute;prias informa&ccedil;&otilde;es confidenciais.
              <br />
              <br />
              5.3. Na tela de configura&ccedil;&otilde;es da Plataforma, os
              nossos Usu&aacute;rios podem controlar o
              acesso/publica&ccedil;&atilde;o de algumas
              informa&ccedil;&otilde;es sobre o seu estabelecimento, tais como:
              valor dos servi&ccedil;os, hor&aacute;rios dispon&iacute;veis,
              localiza&ccedil;&atilde;o e os seus pr&oacute;prios
              usu&aacute;rios cadastrados.
              <br />
              <br />
              5.4. Sempre que o Usu&aacute;rio usa nossos Servi&ccedil;os, nosso
              objetivo &eacute; oferecer acesso livre &agrave;s suas
              informa&ccedil;&otilde;es pessoais e, se essas
              informa&ccedil;&otilde;es estiverem erradas, nos empenhamos em
              prover maneiras r&aacute;pidas de atualiz&aacute;-las, &ndash;
              exceto quando temos de mant&ecirc;-las para fins comerciais
              leg&iacute;timos ou jur&iacute;dicos.
              <br />
              <br />
              5.5. A Gaudium armazena as suas informa&ccedil;&otilde;es durante
              o per&iacute;odo necess&aacute;rio para as finalidades
              apresentadas nos Termos de Uso e nesta pol&iacute;tica de
              privacidade, respeitando o per&iacute;odo de
              reten&ccedil;&atilde;o de dados determinado pela
              legisla&ccedil;&atilde;o aplic&aacute;vel, incluindo o Marco Civil
              da Internet (Lei n&ordm; 12.965/14).
              <br />
              <br />
              5.6. Caso o Usu&aacute;rio solicite a exclus&atilde;o de sua
              conta, as suas informa&ccedil;&otilde;es pessoais fornecidas
              durante a sua utiliza&ccedil;&atilde;o dos nossos Servi&ccedil;os
              ser&atilde;o exclu&iacute;das definitivamente sempre que a
              legisla&ccedil;&atilde;o assim o exigir.
              <br />
              <br />
              5.6.1. Em alguns casos, poderemos reter informa&ccedil;&otilde;es
              mesmo que a conta seja exclu&iacute;da, tais como nas
              hip&oacute;teses de guarda obrigat&oacute;ria de registros
              previstas na lei aplic&aacute;vel, se houver uma quest&atilde;o
              n&atilde;o resolvida relacionada &agrave; sua conta (como, por
              exemplo, uma reclama&ccedil;&atilde;o ou disputa n&atilde;o
              resolvida), ou caso seja necess&aacute;rio
              <br />
              para nossos interesses comerciais leg&iacute;timos, como
              preven&ccedil;&atilde;o de fraudes e aprimoramento da
              seguran&ccedil;a dos nossos Usu&aacute;rios.
              <br />
              <br />
              5.7. Salientamos que, como o nosso objetivo &eacute; manter nossos
              Servi&ccedil;os de modo a proteger informa&ccedil;&otilde;es de
              destrui&ccedil;&atilde;o acidental ou maliciosa, depois de excluir
              informa&ccedil;&otilde;es de nossos Servi&ccedil;os, n&atilde;o
              podemos excluir imediatamente c&oacute;pias residuais de nossos
              servidores ativos de nossos sistemas de backup.
              <br />
              <br />
            </li>
            <li>
              <strong>
                INFORMA&Ccedil;&Otilde;ES COMPARTILHADAS
                <br />
              </strong>
              6.1. N&atilde;o compartilhamos informa&ccedil;&otilde;es pessoais
              com empresas, organiza&ccedil;&otilde;es e indiv&iacute;duos
              externos ou participantes da Gaudium, salvo em uma das seguintes
              circunst&acirc;ncias:
              <br />
              <br />
              (i) Com sua autoriza&ccedil;&atilde;o
              <br />
              Compartilharemos informa&ccedil;&otilde;es pessoais com empresas,
              organiza&ccedil;&otilde;es ou indiv&iacute;duos externos ou
              participantes da Gaudium quando tivermos sua
              autoriza&ccedil;&atilde;o para isso ou quando forem
              necess&aacute;rias para a execu&ccedil;&atilde;o dos
              Servi&ccedil;os. A autoriza&ccedil;&atilde;o para o<br />
              compartilhamento de informa&ccedil;&otilde;es pessoais com
              participantes da Gaudium, pela natureza da Plataforma, j&aacute;
              est&aacute; impl&iacute;cita na realiza&ccedil;&atilde;o de
              cadastro e expl&iacute;cita na aceita&ccedil;&atilde;o da presente
              pol&iacute;tica.
              <br />
              <br />
              (ii) Para processamento externo
              <br />
              Fornecemos informa&ccedil;&otilde;es pessoais a outras empresas ou
              pessoas confi&aacute;veis para process&aacute;-las para
              n&oacute;s, com base em nossas instru&ccedil;&otilde;es e em
              conformidade com nossa pol&iacute;tica de privacidade e quaisquer
              outras medidas de seguran&ccedil;a e de confidencialidade
              adequadas.
              <br />
              <br />
              (iii) Por motivos legais
              <br />
              Compartilharemos informa&ccedil;&otilde;es pessoais com empresas,
              organiza&ccedil;&otilde;es ou indiv&iacute;duos externos &agrave;
              Gaudium se acreditarmos, de boa-f&eacute;, que o acesso, uso,
              conserva&ccedil;&atilde;o ou divulga&ccedil;&atilde;o das
              informa&ccedil;&otilde;es seja razoavelmente necess&aacute;rio
              para:
              <br />
              &nbsp;cumprir qualquer legisla&ccedil;&atilde;o,
              regula&ccedil;&atilde;o, processo formal ou
              solicita&ccedil;&atilde;o governamental aplic&aacute;vel;
              <br />
              &nbsp;detectar, impedir ou abordar de alguma outra forma fraude,
              disputas, quest&otilde;es t&eacute;cnicas ou de seguran&ccedil;a;
              <br />
              &nbsp;proteger contra dano aos direitos, a propriedade ou a
              seguran&ccedil;a da
              <br />
              Gaudium, dos nossos Usu&aacute;rios ou do p&uacute;blico, conforme
              solicitado ou permitido por lei.
              <br />
              <br />
              6.2. Podemos compartilhar informa&ccedil;&otilde;es que n&atilde;o
              sejam pessoalmente identific&aacute;veis publicamente e com nossos
              parceiros, como sites de editores, anunciantes ou sites
              relacionados.
              <br />
              <br />
              6.3. Se a Gaudium estiver envolvida em uma fus&atilde;o,
              aquisi&ccedil;&atilde;o ou venda de ativos, continuaremos a
              garantir a confidencialidade de qualquer informa&ccedil;&atilde;o
              pessoal e avisaremos aos nossos Usu&aacute;rios afetados antes que
              as informa&ccedil;&otilde;es pessoais sejam transferidas ou sejam
              submetidas a uma pol&iacute;tica de privacidade diferente para que
              as Centrais de Transporte possam avaliar a viabilidade
              estrat&eacute;gica da opera&ccedil;&atilde;o para os seus
              neg&oacute;cios e seus usu&aacute;rios.
              <br />
              <br />
              6.4. Podemos, ainda, realizar transfer&ecirc;ncias internacionais
              de dados para outros pa&iacute;ses, tais como Estados Unidos da
              Am&eacute;rica e para pa&iacute;ses da Uni&atilde;o Europeia e da
              Am&eacute;rica Latina, a fim de realizar algumas das atividades
              envolvidas nos servi&ccedil;os prestados aos nossos
              Usu&aacute;rios, bem como para poder obter
              informa&ccedil;&otilde;es que possam contribuir para o
              aperfei&ccedil;oamento dos nossos Servi&ccedil;os, especificamente
              no que tange ao oferecimento de comunica&ccedil;&otilde;es,
              produtos e servi&ccedil;os que sejam de
              <br />
              seu interesse, alterar funcionalidades dos Servi&ccedil;o e
              melhorar a seguran&ccedil;a do ambiente da Plataforma.
              <br />
              <br />
              6.5. Em qualquer caso de compartilhamento com parceiros
              localizados em outros pa&iacute;ses, estabelecemos contratualmente
              que o parceiro possua padr&atilde;o de prote&ccedil;&atilde;o de
              dados e seguran&ccedil;a da informa&ccedil;&atilde;o
              compat&iacute;vel com esta pol&iacute;tica de privacidade, a fim
              de que seus dados sejam sempre protegidos nestes termos.
              <br />
              <br />
            </li>
            <li>
              <strong>
                DISPOSI&Ccedil;&Otilde;ES GERAIS
                <br />
              </strong>
              7.1. Podemos rever esta pol&iacute;tica de privacidade a qualquer
              momento, promovendo altera&ccedil;&otilde;es a esta p&aacute;gina.
              Qualquer mudan&ccedil;a significativa na pol&iacute;tica de
              privacidade ser&aacute; informada por meio de aviso na Plataforma
              e/ou notificada por meio de alerta enviado aos e-mails cadastrados
              de nossos clientes.
              <br />
              <br />
              7.2. A solicita&ccedil;&atilde;o de cancelamento da conta dos
              Usu&aacute;rios passageiros e motoristas dever&aacute; ser
              realizada enviando um e-mail para o contato das Centrais de
              Transporte. O cancelamento, ent&atilde;o, ser&aacute; realizado
              pelas Centrais de Transporte, se responsabilizando a Gaudium por
              cancelar apenas as contas das pr&oacute;prias Centrais de
              Transporte.
              <br />
              <br />
              7.3. Por fim, a presente pol&iacute;tica de privacidade
              ser&aacute; interpretada segundo a legisla&ccedil;&atilde;o
              brasileira, no idioma portugu&ecirc;s, sendo eleito o foro da
              comarca do Rio de Janeiro para dirimir qualquer lit&iacute;gio,
              quest&atilde;o ou d&uacute;vida superveniente, com expressa
              ren&uacute;ncia de qualquer outro, por mais privilegiado que seja.
            </li>
          </ol>
        </Box>
      </Flex>
    </Flex>
  );
}

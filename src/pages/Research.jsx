import React from 'react';
import { 
  Box, 
  Container, 
  SimpleGrid, 
  Heading, 
  Text, 
  Button, 
  Stack, 
  Flex,
  Image,
  Badge,
  LinkBox,
  LinkOverlay,
  HStack,
  VStack,
  Icon,
  Divider,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link
} from '@chakra-ui/react';
import { ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt, FaRegCalendarAlt, FaUsers, FaFlask } from 'react-icons/fa';

import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const Research = () => {
  // 科研论文数据
  const researchPapers = [
    {
      id: 1,
      title: "CDKL5蛋白在神经元发育中的作用机制研究",
      authors: "Zhang J, Wang L, Liu Y, et al.",
      journal: "Nature Neuroscience",
      year: 2023,
      abstract: "本研究阐明了CDKL5蛋白如何通过磷酸化特定底物调控神经元突触形成和功能，为开发针对性治疗提供了新靶点。",
      link: "#",
      tags: ["分子机制", "神经发育"]
    },
    {
      id: 2,
      title: "基于AAV载体的CDKL5基因替代疗法在小鼠模型中的前临床研究",
      authors: "Chen H, Smith A, Johnson B, et al.",
      journal: "Science Translational Medicine",
      year: 2023,
      abstract: "研究表明，腺相关病毒(AAV)介导的CDKL5基因递送可以在CDKL5缺陷小鼠模型中显著改善癫痫发作和行为异常。",
      link: "#",
      tags: ["基因治疗", "动物模型"]
    },
    {
      id: 3,
      title: "CDKL5缺陷症候群患者的长期随访研究：自然病程和预后因素",
      authors: "Brown R, Davis K, Wilson M, et al.",
      journal: "Epilepsia",
      year: 2022,
      abstract: "这项多中心研究对120名CDKL5患者进行了长达10年的随访，描述了疾病的自然进程，并确定了影响预后的关键因素。",
      link: "#",
      tags: ["临床研究", "自然病程"]
    },
  ];
  
  // 临床试验数据
  const clinicalTrials = [
    {
      id: "NCT04725240",
      title: "CDKL5缺陷症候群反义寡核苷酸治疗的I期临床试验",
      phase: "I期",
      status: "招募中",
      locations: ["美国波士顿儿童医院", "加州大学旧金山分校医疗中心"],
      eligibility: "2-18岁确诊CDKL5缺陷症候群患者",
      description: "评估靶向CDKL5基因的反义寡核苷酸疗法的安全性和耐受性",
      contact: "trial@example.com"
    },
    {
      id: "NCT04559243",
      title: "CDKL5缺陷症候群患者的甘纳比醇治疗研究",
      phase: "II期",
      status: "进行中",
      locations: ["英国伦敦大学学院医院", "法国巴黎神经科学研究所"],
      eligibility: "2岁以上确诊CDKL5缺陷症候群且有难治性癫痫的患者",
      description: "研究甘纳比醇对CDKL5患者癫痫发作的控制效果",
      contact: "cannabidiol@example.com"
    },
    {
      id: "NCT04618835",
      title: "CDKL5缺陷症候群的自然病程研究",
      phase: "观察性研究",
      status: "招募中",
      locations: ["多中心国际研究"],
      eligibility: "所有年龄段确诊CDKL5缺陷症候群患者",
      description: "收集CDKL5患者的长期数据，以更好地了解疾病进展和预后",
      contact: "naturalstudy@example.com"
    }
  ];
  
  // 研究机构数据
  const researchInstitutes = [
    {
      name: "CDKL5研究中心",
      location: "美国宾夕法尼亚大学",
      description: "专注于CDKL5基础研究和转化医学，开发创新治疗方法",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "儿童神经遗传病研究所",
      location: "意大利博洛尼亚大学",
      description: "欧洲领先的CDKL5研究中心，专注于分子机制研究",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "神经发育障碍基因治疗中心",
      location: "澳大利亚墨尔本大学",
      description: "专注于开发CDKL5和相关疾病的基因和细胞治疗方法",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "北京儿童医院神经遗传病研究中心",
      location: "中国北京",
      description: "亚洲领先的CDKL5研究和临床治疗中心",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];
  
  // 合作项目数据
  const collaborationProjects = [
    {
      title: "CDKL5全球基因组计划",
      description: "收集和分析全球CDKL5患者的基因组数据，以发现新的致病变异和修饰基因",
      requirements: "寻求具有生物信息学或遗传学背景的研究人员参与",
      deadline: "2023年12月31日",
      contact: "genomics@example.com"
    },
    {
      title: "CDKL5患者脑电图数据库建设",
      description: "建立全球最大的CDKL5患者脑电图数据库，用于研究癫痫发作模式和预测因素",
      requirements: "招募神经电生理学专家和数据科学家",
      deadline: "2023年10月15日",
      contact: "eeg@example.com"
    }
  ];

  return (
    <Box>
      <PageHeader 
        title="研究与进展" 
        description="了解CDKL5领域的最新科研成果、临床试验和全球研究动态"
        breadcrumbs={[{ name: '研究与进展', path: '/research' }]}
      />

      <Container maxW="container.xl" py={8}>
        {/* 科研论文摘要 */}
        <Box mb={16}>
          <SectionTitle 
            title="科研论文摘要" 
            subtitle="最新发表的CDKL5相关研究论文"
          />
          
          <Stack spacing={8}>
            {researchPapers.map(paper => (
              <Box 
                key={paper.id}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
              >
                <Heading as="h3" size="md" mb={2}>
                  <Link href={paper.link} isExternal>
                    {paper.title} <ExternalLinkIcon mx="2px" />
                  </Link>
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={3}>
                  {paper.authors} | {paper.journal} | {paper.year}
                </Text>
                <HStack spacing={2} mb={4}>
                  {paper.tags.map((tag, index) => (
                    <Badge key={index} colorScheme="brand" variant="subtle">
                      {tag}
                    </Badge>
                  ))}
                </HStack>
                <Text>{paper.abstract}</Text>
              </Box>
            ))}
          </Stack>
          
          <Flex justify="center" mt={8}>
            <Button variant="outline" colorScheme="brand" rightIcon={<DownloadIcon />}>
              下载完整文献列表
            </Button>
          </Flex>
        </Box>

        <Divider my={16} />

        {/* 临床试验信息 */}
        <Box mb={16}>
          <SectionTitle 
            title="临床试验信息" 
            subtitle="正在进行和即将开展的CDKL5相关临床试验"
          />
          
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>试验编号</Th>
                  <Th>试验标题</Th>
                  <Th>阶段</Th>
                  <Th>状态</Th>
                  <Th>详情</Th>
                </Tr>
              </Thead>
              <Tbody>
                {clinicalTrials.map(trial => (
                  <Tr key={trial.id}>
                    <Td>{trial.id}</Td>
                    <Td>{trial.title}</Td>
                    <Td>{trial.phase}</Td>
                    <Td>
                      <Badge 
                        colorScheme={trial.status === "招募中" ? "green" : "blue"}
                      >
                        {trial.status}
                      </Badge>
                    </Td>
                    <Td>
                      <Button size="sm" colorScheme="brand" variant="outline">
                        查看详情
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          
          <Box mt={8} p={6} bg="blue.50" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              参与临床试验
            </Heading>
            <Text mb={4}>
              临床试验对推进CDKL5治疗研究至关重要。如果您或您的家人有兴趣参与临床试验，请咨询您的医生或直接联系试验负责人获取更多信息。
            </Text>
            <Button colorScheme="brand">查找适合您的临床试验</Button>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 全球研究机构地图 */}
        <Box mb={16}>
          <SectionTitle 
            title="全球研究机构" 
            subtitle="世界各地致力于CDKL5研究的主要机构"
          />
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {researchInstitutes.map((institute, index) => (
              <Card key={index} variant="outline" overflow="hidden">
                <Image
                  src={institute.image}
                  alt={institute.name}
                  height="160px"
                  objectFit="cover"
                />
                <CardBody>
                  <Heading as="h3" size="md" mb={2}>
                    {institute.name}
                  </Heading>
                  <HStack mb={3}>
                    <Icon as={FaMapMarkerAlt} color="red.500" />
                    <Text fontSize="sm" color="gray.600">
                      {institute.location}
                    </Text>
                  </HStack>
                  <Text fontSize="sm">
                    {institute.description}
                  </Text>
                </CardBody>
                <CardFooter pt={0}>
                  <Button variant="link" colorScheme="brand" size="sm">
                    查看详情
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          
          <Flex justify="center" mt={8}>
            <Button colorScheme="brand" leftIcon={<FaMapMarkerAlt />}>
              查看互动研究地图
            </Button>
          </Flex>
        </Box>

        <Divider my={16} />

        {/* 合作项目招募 */}
        <Box>
          <SectionTitle 
            title="合作项目招募" 
            subtitle="寻求研究合作伙伴的开放项目"
          />
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {collaborationProjects.map((project, index) => (
              <Box 
                key={index}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                borderLeft="4px solid"
                borderColor="brand.500"
              >
                <Heading as="h3" size="md" mb={4}>
                  {project.title}
                </Heading>
                <Text mb={4}>
                  {project.description}
                </Text>
                <Stack spacing={3} mb={4}>
                  <HStack>
                    <Icon as={FaUsers} color="brand.500" />
                    <Text fontWeight="medium">招募对象:</Text>
                    <Text>{project.requirements}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaRegCalendarAlt} color="brand.500" />
                    <Text fontWeight="medium">截止日期:</Text>
                    <Text>{project.deadline}</Text>
                  </HStack>
                </Stack>
                <Button colorScheme="brand" size="sm">
                  申请参与
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box mt={10} p={6} textAlign="center" bg="gray.50" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              提交您的研究项目
            </Heading>
            <Text mb={4}>
              如果您正在进行CDKL5相关研究并希望寻求合作伙伴或参与者，欢迎提交您的项目信息。
            </Text>
            <Button colorScheme="brand" leftIcon={<FaFlask />}>
              提交研究项目
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Research;

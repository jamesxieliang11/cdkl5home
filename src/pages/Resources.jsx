import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  SimpleGrid, 
  Heading, 
  Text, 
  Button, 
  Stack, 
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Badge,
  Icon,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Card,
  CardBody,
  Divider,
  HStack,
  VStack,
  Image,
  FormControl,
  FormLabel,
  Checkbox
} from '@chakra-ui/react';
import { 
  SearchIcon, 
  DownloadIcon, 
  ExternalLinkIcon, 
  CheckCircleIcon,
  PhoneIcon,
  EmailIcon
} from '@chakra-ui/icons';
import { 
  FaFilePdf, 
  FaFileWord, 
  FaFileVideo, 
  FaLanguage,
  FaFlask,
  FaBalanceScale,
  FaAmbulance,
  FaGlobe
} from 'react-icons/fa';

import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const Resources = () => {
  const [language, setLanguage] = useState('all');
  const [resourceType, setResourceType] = useState('all');
  
  // 多语言手册数据
  const multilingualResources = [
    {
      title: "CDKL5家庭护理手册",
      language: "中文",
      type: "PDF",
      size: "2.5MB",
      description: "全面的CDKL5患者家庭护理指南，包括日常护理、用药管理和康复训练",
      icon: FaFilePdf
    },
    {
      title: "CDKL5 Family Care Guide",
      language: "英文",
      type: "PDF",
      size: "2.8MB",
      description: "Comprehensive guide for CDKL5 patient family care, including daily care, medication management, and rehabilitation",
      icon: FaFilePdf
    },
    {
      title: "CDKL5診断後のガイド",
      language: "日文",
      type: "PDF",
      size: "2.3MB",
      description: "CDKL5診断後の家族のための包括的なケアガイド",
      icon: FaFilePdf
    },
    {
      title: "CDKL5患者营养指南",
      language: "中文",
      type: "Word",
      size: "1.8MB",
      description: "针对CDKL5患者特殊需求的营养建议和食谱",
      icon: FaFileWord
    },
    {
      title: "CDKL5康复训练视频教程",
      language: "中文",
      type: "视频",
      size: "245MB",
      description: "由专业康复师指导的物理治疗和职业治疗训练视频",
      icon: FaFileVideo
    },
    {
      title: "CDKL5 Rehabilitation Training Videos",
      language: "英文",
      type: "视频",
      size: "260MB",
      description: "Physical therapy and occupational therapy training videos guided by professional rehabilitation therapists",
      icon: FaFileVideo
    }
  ];
  
  // 药物研发进展数据
  const drugDevelopments = [
    {
      drug: "Ganaxolone",
      mechanism: "GABA受体调节剂",
      phase: "III期临床试验",
      company: "Marinus Pharmaceuticals",
      status: "FDA已批准用于CDKL5相关癫痫",
      updates: "2023年6月：发表长期安全性和有效性数据"
    },
    {
      drug: "Fenfluramine",
      mechanism: "5-HT释放增强剂",
      phase: "II期临床试验",
      company: "Zogenix",
      status: "正在评估对CDKL5患者的有效性",
      updates: "2023年4月：启动II期临床试验"
    },
    {
      drug: "STK-001",
      mechanism: "反义寡核苷酸",
      phase: "I/II期临床试验",
      company: "Stoke Therapeutics",
      status: "正在招募患者",
      updates: "2023年3月：获得FDA快速通道资格"
    },
    {
      drug: "AAV-CDKL5",
      mechanism: "基因替代疗法",
      phase: "临床前研究",
      company: "Neurogene",
      status: "动物模型研究阶段",
      updates: "2023年7月：发表积极的动物研究结果"
    }
  ];
  
  // 保险与法律指南数据
  const legalResources = [
    {
      title: "CDKL5患者医疗保险报销指南",
      description: "详细介绍CDKL5患者如何最大化医疗保险覆盖范围，包括特殊药物和治疗的报销途径。",
      type: "保险指南"
    },
    {
      title: "罕见病患者法律权益手册",
      description: "解释罕见病患者在教育、就业、医疗等方面的法律权益，以及如何维护这些权益。",
      type: "法律指南"
    },
    {
      title: "CDKL5患者社会保障申请指南",
      description: "指导如何为CDKL5患者申请残疾人社会保障、特殊教育资源和其他政府支持。",
      type: "政策指南"
    },
    {
      title: "医疗决策授权书模板",
      description: "为无法自主决策的CDKL5患者准备的医疗决策授权文件模板，帮助家庭在紧急情况下做出决策。",
      type: "法律文档"
    }
  ];
  
  // 紧急救援联系方式数据
  const emergencyContacts = [
    {
      name: "CDKL5患者紧急救援热线",
      contact: "400-123-4567",
      hours: "24小时",
      services: ["紧急医疗咨询", "心理危机干预", "医院转诊"],
      coverage: "全国"
    },
    {
      name: "CDKL5癫痫发作应急响应中心",
      contact: "400-765-4321",
      hours: "24小时",
      services: ["癫痫发作管理咨询", "紧急用药指导", "远程医疗支持"],
      coverage: "全国"
    },
    {
      name: "罕见病医疗救助基金会",
      contact: "contact@raredisease.org",
      hours: "工作日 9:00-17:00",
      services: ["紧急医疗费用援助", "特殊药物获取", "医疗资源协调"],
      coverage: "全国"
    }
  ];
  
  // 筛选多语言资源
  const filteredResources = multilingualResources.filter(resource => {
    if (language !== 'all' && resource.language !== language) return false;
    if (resourceType !== 'all' && resource.type !== resourceType) return false;
    return true;
  });

  return (
    <Box>
      <PageHeader 
        title="资源中心" 
        description="获取CDKL5相关的全面资源、指南和紧急联系信息"
        breadcrumbs={[{ name: '资源中心', path: '/resources' }]}
      />

      <Container maxW="container.xl" py={8}>
        {/* 多语言手册下载 */}
        <Box mb={16}>
          <SectionTitle 
            title="多语言手册下载" 
            subtitle="提供多种语言的CDKL5相关资源，满足不同家庭的需求"
          />
          
          <Flex 
            direction={{ base: "column", md: "row" }} 
            mb={6}
            gap={4}
          >
            <Box flex="1">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input placeholder="搜索资源" />
              </InputGroup>
            </Box>
            <Select 
              width={{ base: "100%", md: "200px" }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="all">所有语言</option>
              <option value="中文">中文</option>
              <option value="英文">英文</option>
              <option value="日文">日文</option>
            </Select>
            <Select 
              width={{ base: "100%", md: "200px" }}
              value={resourceType}
              onChange={(e) => setResourceType(e.target.value)}
            >
              <option value="all">所有类型</option>
              <option value="PDF">PDF</option>
              <option value="Word">Word</option>
              <option value="视频">视频</option>
            </Select>
          </Flex>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {filteredResources.map((resource, index) => (
              <Flex 
                key={index}
                p={5}
                boxShadow="sm"
                borderRadius="md"
                bg="white"
                borderWidth="1px"
                align="center"
              >
                <Box 
                  p={3}
                  borderRadius="md"
                  color="brand.600"
                  bg="brand.50"
                  mr={4}
                >
                  <Icon as={resource.icon} boxSize={6} />
                </Box>
                <Box flex="1">
                  <Heading as="h3" size="sm" mb={1}>
                    {resource.title}
                  </Heading>
                  <HStack spacing={2} mb={2}>
                    <Badge colorScheme="brand">{resource.language}</Badge>
                    <Badge colorScheme="blue">{resource.type}</Badge>
                    <Text fontSize="xs" color="gray.500">{resource.size}</Text>
                  </HStack>
                  <Text fontSize="sm" noOfLines={2}>
                    {resource.description}
                  </Text>
                </Box>
                <Button 
                  variant="ghost" 
                  colorScheme="brand"
                  rightIcon={<DownloadIcon />}
                  size="sm"
                >
                  下载
                </Button>
              </Flex>
            ))}
          </SimpleGrid>
          
          <Box mt={8} p={6} bg="blue.50" borderRadius="md">
            <Flex 
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              justify="space-between"
            >
              <Box mb={{ base: 4, md: 0 }}>
                <Heading as="h3" size="md" mb={2}>
                  需要其他语言的资源？
                </Heading>
                <Text>
                  如果您需要其他语言的资源，或者有翻译志愿者想要帮助我们，请联系我们。
                </Text>
              </Box>
              <HStack spacing={4}>
                <Button leftIcon={<FaLanguage />} colorScheme="brand" variant="outline">
                  请求翻译
                </Button>
                <Button leftIcon={<FaLanguage />} colorScheme="brand">
                  成为翻译志愿者
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 药物研发进展追踪 */}
        <Box mb={16}>
          <SectionTitle 
            title="药物研发进展追踪" 
            subtitle="了解CDKL5相关治疗的最新研发进展和临床试验信息"
          />
          
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>药物名称</Th>
                  <Th>作用机制</Th>
                  <Th>研发阶段</Th>
                  <Th>研发公司</Th>
                  <Th>最新状态</Th>
                </Tr>
              </Thead>
              <Tbody>
                {drugDevelopments.map((drug, index) => (
                  <Tr key={index}>
                    <Td fontWeight="bold">{drug.drug}</Td>
                    <Td>{drug.mechanism}</Td>
                    <Td>
                      <Badge colorScheme={
                        drug.phase.includes("III") ? "green" : 
                        drug.phase.includes("II") ? "blue" : 
                        drug.phase.includes("I") ? "purple" : "gray"
                      }>
                        {drug.phase}
                      </Badge>
                    </Td>
                    <Td>{drug.company}</Td>
                    <Td>
                      <VStack align="start" spacing={1}>
                        <Text>{drug.status}</Text>
                        <Text fontSize="sm" color="gray.600">{drug.updates}</Text>
                      </VStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          
          <Flex justify="center" mt={8}>
            <Button 
              leftIcon={<FaFlask />} 
              colorScheme="brand"
              rightIcon={<ExternalLinkIcon />}
            >
              查看所有临床试验
            </Button>
          </Flex>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
            <Card variant="outline">
              <CardBody>
                <Heading size="md" mb={4}>
                  如何参与临床试验？
                </Heading>
                <Text mb={4}>
                  参与临床试验可能为CDKL5患者提供获取创新治疗的机会，同时也有助于推进CDKL5的研究和治疗发展。
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    咨询您的医生是否适合参与临床试验
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    了解试验的风险和潜在益处
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    查询您所在地区的临床试验机会
                  </ListItem>
                </List>
                <Button mt={4} colorScheme="brand" variant="outline">
                  查找适合的临床试验
                </Button>
              </CardBody>
            </Card>
            
            <Card variant="outline">
              <CardBody>
                <Heading size="md" mb={4}>
                  药物可及性计划
                </Heading>
                <Text mb={4}>
                  一些制药公司为尚未获得批准但有前景的药物提供扩展使用计划，帮助患者在正式批准前获取治疗。
                </Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    同情用药计划
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    患者援助项目
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    临床试验外的药物获取途径
                  </ListItem>
                </List>
                <Button mt={4} colorScheme="brand" variant="outline">
                  了解药物可及性计划
                </Button>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Box>

        <Divider my={16} />

        {/* 保险与法律指南 */}
        <Box mb={16}>
          <SectionTitle 
            title="保险与法律指南" 
            subtitle="帮助CDKL5患者家庭了解和维护自身权益的实用指南"
          />
          
          <Accordion allowToggle>
            {legalResources.map((resource, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton py={4}>
                    <Box flex="1" textAlign="left">
                      <Flex align="center">
                        <Icon 
                          as={FaBalanceScale} 
                          color="brand.500" 
                          mr={3}
                        />
                        <Box>
                          <Heading as="h3" size="sm">
                            {resource.title}
                          </Heading>
                          <Badge mt={1} colorScheme="purple">
                            {resource.type}
                          </Badge>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text mb={4}>{resource.description}</Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Button leftIcon={<DownloadIcon />} colorScheme="brand" variant="outline">
                      下载PDF版本
                    </Button>
                    <Button leftIcon={<ExternalLinkIcon />} colorScheme="brand" variant="outline">
                      在线阅读
                    </Button>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          
          <Box mt={10} p={6} bg="purple.50" borderRadius="md">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="md" mb={4}>
                  法律咨询服务
                </Heading>
                <Text mb={4}>
                  我们提供专业的法律咨询服务，帮助CDKL5患者家庭解决保险理赔、残疾认定、特殊教育权益等问题。
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    医疗保险理赔咨询
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    残疾人权益维护
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    特殊教育资源获取
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    医疗决策法律支持
                  </ListItem>
                </List>
              </Box>
              <Box>
                <FormControl mb={4}>
                  <Heading as="h4" size="sm" mb={3}>
                    预约法律咨询
                  </Heading>
                  <Input placeholder="您的姓名" mb={3} />
                  <Input placeholder="联系电话" mb={3} />
                  <Input placeholder="电子邮箱" mb={3} />
                  <Select placeholder="咨询类型" mb={3}>
                    <option>医疗保险问题</option>
                    <option>残疾人权益</option>
                    <option>特殊教育资源</option>
                    <option>其他法律问题</option>
                  </Select>
                  <Button colorScheme="brand" width="100%">
                    提交预约
                  </Button>
                </FormControl>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 紧急救援联系方式 */}
        <Box>
          <SectionTitle 
            title="紧急救援联系方式" 
            subtitle="为CDKL5患者及家庭提供紧急情况下的支持和帮助"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
            {emergencyContacts.map((contact, index) => (
              <Box 
                key={index}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                borderLeft="4px solid"
                borderColor="red.500"
              >
                <Heading as="h3" size="md" mb={3}>
                  {contact.name}
                </Heading>
                <VStack align="start" spacing={3} mb={4}>
                  {contact.contact.includes('@') ? (
                    <HStack>
                      <Icon as={EmailIcon} color="blue.500" />
                      <Link href={`mailto:${contact.contact}`}>
                        {contact.contact}
                      </Link>
                    </HStack>
                  ) : (
                    <HStack>
                      <Icon as={PhoneIcon} color="green.500" />
                      <Link href={`tel:${contact.contact}`}>
                        {contact.contact}
                      </Link>
                    </HStack>
                  )}
                  <Text fontSize="sm">
                    <strong>服务时间:</strong> {contact.hours}
                  </Text>
                  <Text fontSize="sm">
                    <strong>覆盖范围:</strong> {contact.coverage}
                  </Text>
                </VStack>
                <Text fontWeight="medium" mb={2}>
                  提供服务:
                </Text>
                <List spacing={1}>
                  {contact.services.map((service, i) => (
                    <ListItem key={i} fontSize="sm">
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      {service}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box p={6} bg="red.50" borderRadius="md">
            <Flex 
              direction={{ base: "column", md: "row" }} 
              align="center"
              justify="space-between"
            >
              <Box mb={{ base: 4, md: 0 }}>
                <Heading as="h3" size="md" mb={2} display="flex" alignItems="center">
                  <Icon as={FaAmbulance} mr={2} color="red.500" />
                  紧急情况处理指南
                </Heading>
                <Text>
                  下载CDKL5患者紧急情况处理指南，了解如何应对常见的紧急情况，包括癫痫发作、呼吸困难等。
                </Text>
              </Box>
              <HStack spacing={4}>
                <Button leftIcon={<DownloadIcon />} colorScheme="red">
                  下载紧急指南
                </Button>
                <Button leftIcon={<FaGlobe />} variant="outline" colorScheme="red">
                  查找最近医院
                </Button>
              </HStack>
            </Flex>
          </Box>
          
          <Box mt={10} textAlign="center">
            <Heading as="h3" size="md" mb={4}>
              CDKL5医疗警示卡
            </Heading>
            <Text mb={6}>
              下载并打印CDKL5医疗警示卡，随身携带，在紧急情况下帮助医务人员了解患者的特殊医疗需求。
            </Text>
            <Flex justify="center">
              <Image 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="医疗警示卡示例"
                height="200px"
                borderRadius="md"
                shadow="md"
              />
            </Flex>
            <Button mt={6} colorScheme="brand" leftIcon={<DownloadIcon />}>
              下载医疗警示卡模板
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Resources;

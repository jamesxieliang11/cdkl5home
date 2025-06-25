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
  Icon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  List,
  ListItem,
  ListIcon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  HStack,
  Badge,
  Link
} from '@chakra-ui/react';
import { 
  CheckCircleIcon, 
  DownloadIcon, 
  SearchIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons';
import { 
  FaUserCircle, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaFileDownload, 
  FaBookMedical,
  FaHospital,
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';

import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const Support = () => {
  // 患者故事数据
  const patientStories = [
    {
      id: 1,
      name: "小雨",
      age: 6,
      image: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "尽管面临挑战，小雨每天都带着微笑面对生活。她的坚强和乐观激励着我们全家。",
      author: "小雨的妈妈"
    },
    {
      id: 2,
      name: "天天",
      age: 8,
      image: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "从确诊到接受，从绝望到希望，天天的成长之路充满了艰辛，但也让我们看到了无限可能。",
      author: "天天的爸爸"
    },
    {
      id: 3,
      name: "小宇",
      age: 4,
      image: "https://images.unsplash.com/photo-1537673156864-5d2c72de7824?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      quote: "每一个小进步对我们来说都是巨大的胜利。小宇教会了我们珍惜生活中的每一个瞬间。",
      author: "小宇的家人"
    }
  ];
  
  // 护理指南数据
  const careGuides = [
    {
      title: "日常护理基础",
      topics: [
        "营养和饮食管理",
        "睡眠问题解决方案",
        "个人卫生与舒适维护",
        "体位管理与预防并发症"
      ],
      icon: FaBookMedical
    },
    {
      title: "癫痫管理",
      topics: [
        "识别不同类型的癫痫发作",
        "发作期间的急救措施",
        "药物管理与监测副作用",
        "记录发作日志的重要性"
      ],
      icon: FaBookMedical
    },
    {
      title: "康复训练",
      topics: [
        "物理治疗家庭练习",
        "语言和沟通能力发展",
        "认知刺激活动",
        "辅助技术的应用"
      ],
      icon: FaBookMedical
    }
  ];
  
  // 康复资源数据
  const rehabilitationResources = [
    {
      title: "CDKL5患者家庭护理手册",
      format: "PDF",
      size: "2.5MB",
      description: "全面的家庭护理指南，包括日常护理、用药管理和康复训练"
    },
    {
      title: "CDKL5患者康复训练视频教程",
      format: "视频系列",
      size: "10个视频",
      description: "由专业康复师指导的物理治疗和职业治疗训练视频"
    },
    {
      title: "CDKL5患者营养指南",
      format: "PDF",
      size: "1.8MB",
      description: "针对CDKL5患者特殊需求的营养建议和食谱"
    },
    {
      title: "辅助沟通工具使用手册",
      format: "PDF + 视频",
      size: "3.2MB",
      description: "帮助非言语交流患者的辅助沟通设备和应用指南"
    }
  ];
  
  // 医疗中心数据
  const medicalCenters = [
    {
      name: "北京儿童医院神经遗传病诊疗中心",
      address: "北京市西城区南礼士路56号",
      contact: "010-12345678",
      specialties: ["基因诊断", "癫痫管理", "综合康复"]
    },
    {
      name: "上海儿童医学中心罕见病诊疗中心",
      address: "上海市浦东新区东方路1678号",
      contact: "021-12345678",
      specialties: ["多学科诊疗", "临床试验", "家庭支持"]
    },
    {
      name: "广州市妇女儿童医疗中心神经发育障碍诊疗中心",
      address: "广州市越秀区人民中路318号",
      contact: "020-12345678",
      specialties: ["早期干预", "康复治疗", "过渡期护理"]
    }
  ];

  return (
    <Box>
      <PageHeader 
        title="患者支持" 
        description="为CDKL5患者及家庭提供全方位的支持和资源"
        breadcrumbs={[{ name: '患者支持', path: '/support' }]}
      />

      <Container maxW="container.xl" py={8}>
        {/* 患者故事 */}
        <Box mb={16}>
          <SectionTitle 
            title="患者故事" 
            subtitle="分享CDKL5患者家庭的真实经历和心路历程"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {patientStories.map(story => (
              <Card key={story.id} variant="outline" height="100%">
                <CardHeader pb={0}>
                  <Flex spacing="4" align="center">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Image
                        borderRadius="full"
                        boxSize="60px"
                        src={story.image}
                        alt={story.name}
                      />
                      <Box>
                        <Heading size="md">{story.name}</Heading>
                        <Text>{story.age}岁</Text>
                      </Box>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex direction="column" height="100%">
                    <Box flex="1">
                      <Icon as={FaQuoteLeft} color="brand.300" mb={2} />
                      <Text py={2}>{story.quote}</Text>
                      <Icon as={FaQuoteRight} color="brand.300" float="right" mt={2} />
                    </Box>
                    <Text mt={4} fontStyle="italic" textAlign="right" color="gray.600">
                      — {story.author}
                    </Text>
                  </Flex>
                </CardBody>
                <CardFooter pt={0}>
                  <Button variant="link" colorScheme="brand" rightIcon={<ExternalLinkIcon />}>
                    阅读完整故事
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          
          <Flex justify="center" mt={8}>
            <Button 
              leftIcon={<FaUserCircle />} 
              colorScheme="brand"
            >
              分享您的故事
            </Button>
          </Flex>
        </Box>

        <Divider my={16} />

        {/* 护理指南 */}
        <Box mb={16}>
          <SectionTitle 
            title="护理指南" 
            subtitle="专业的CDKL5患者日常护理和康复建议"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {careGuides.map((guide, index) => (
              <Box 
                key={index}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
              >
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="brand.500"
                  mb={4}
                >
                  <Icon as={guide.icon} w={8} h={8} />
                </Flex>
                <Heading as="h3" size="md" mb={4}>
                  {guide.title}
                </Heading>
                <List spacing={3}>
                  {guide.topics.map((topic, i) => (
                    <ListItem key={i}>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      {topic}
                    </ListItem>
                  ))}
                </List>
                <Button mt={6} colorScheme="brand" variant="outline" width="100%">
                  查看详细指南
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box mt={10} p={6} bg="blue.50" borderRadius="md">
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
              <Box mb={{ base: 4, md: 0 }}>
                <Heading as="h3" size="md" mb={2}>
                  个性化护理咨询
                </Heading>
                <Text>
                  我们提供一对一的护理咨询服务，帮助您制定针对患者特定需求的护理计划。
                </Text>
              </Box>
              <Button colorScheme="brand">
                预约咨询
              </Button>
            </Flex>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 康复资源下载 */}
        <Box mb={16}>
          <SectionTitle 
            title="康复资源下载" 
            subtitle="专业的CDKL5康复训练和护理资料"
          />
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {rehabilitationResources.map((resource, index) => (
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
                  bg="brand.50"
                  borderRadius="md"
                  color="brand.600"
                  mr={4}
                >
                  <FaFileDownload size="24px" />
                </Box>
                <Box flex="1">
                  <Heading as="h3" size="sm" mb={1}>
                    {resource.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" mb={2}>
                    {resource.format} · {resource.size}
                  </Text>
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
          
          <Box mt={8} textAlign="center">
            <Button colorScheme="brand" leftIcon={<DownloadIcon />}>
              浏览所有资源
            </Button>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 本地医疗中心查询 */}
        <Box>
          <SectionTitle 
            title="本地医疗中心查询" 
            subtitle="寻找专业的CDKL5诊疗和康复中心"
          />
          
          <Box mb={8}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input placeholder="输入城市或地区查找医疗中心" />
              <Button colorScheme="brand" ml={2} px={8}>
                搜索
              </Button>
            </InputGroup>
          </Box>
          
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
            {medicalCenters.map((center, index) => (
              <Box 
                key={index}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
              >
                <Heading as="h3" size="md" mb={3}>
                  {center.name}
                </Heading>
                <VStack align="start" spacing={3} mb={4}>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} color="red.500" />
                    <Text>{center.address}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaPhone} color="green.500" />
                    <Text>{center.contact}</Text>
                  </HStack>
                </VStack>
                <Heading as="h4" size="sm" mb={2}>
                  专长领域:
                </Heading>
                <HStack spacing={2} flexWrap="wrap">
                  {center.specialties.map((specialty, i) => (
                    <Badge key={i} colorScheme="brand" mb={2}>
                      {specialty}
                    </Badge>
                  ))}
                </HStack>
                <Button 
                  mt={4}
                  leftIcon={<FaHospital />}
                  colorScheme="brand"
                  variant="outline"
                  size="sm"
                  width="100%"
                >
                  查看详情
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box mt={10} p={6} textAlign="center" bg="gray.50" borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              推荐医疗中心
            </Heading>
            <Text mb={4}>
              您知道一家专业的CDKL5诊疗中心？帮助我们完善医疗资源地图，为更多患者提供帮助。
            </Text>
            <Button colorScheme="brand">
              推荐医疗机构
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Support;

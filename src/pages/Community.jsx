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
  Textarea,
  FormControl,
  FormLabel,
  Select,
  Avatar,
  Tag,
  TagLabel,
  TagLeftIcon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Divider,
  Badge,
  Link,
  HStack,
  VStack,
  Icon,
  Image
} from '@chakra-ui/react';
import { 
  ChatIcon, 
  AddIcon, 
  StarIcon, 
  ViewIcon, 
  TimeIcon,
  CheckCircleIcon
} from '@chakra-ui/icons';
import { 
  FaHeart, 
  FaComment, 
  FaUserMd, 
  FaCalendarAlt, 
  FaClock,
  FaVideo
} from 'react-icons/fa';

import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const Community = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 论坛话题数据
  const forumTopics = [
    {
      id: 1,
      title: "如何应对CDKL5患者的睡眠问题？",
      author: "阳光妈妈",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2023-08-15",
      category: "护理经验",
      replies: 24,
      views: 156,
      excerpt: "我的孩子最近睡眠问题加重，很难入睡，经常夜间醒来。我们尝试了规律的睡眠时间表，但效果不明显。有家长有类似经历吗？"
    },
    {
      id: 2,
      title: "分享我们使用的非药物止痛方法",
      author: "勇敢爸爸",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2023-08-10",
      category: "护理经验",
      replies: 18,
      views: 132,
      excerpt: "我们发现一些非药物方法对缓解孩子的不适很有效，包括特定的按摩技巧和温热敷。想分享我们的经验并听听其他家庭的做法。"
    },
    {
      id: 3,
      title: "面对诊断后的情绪调适",
      author: "坚强妈妈",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2023-08-05",
      category: "情绪支持",
      replies: 32,
      views: 198,
      excerpt: "刚得知孩子的诊断，感到非常沮丧和无助。不知道其他家庭是如何度过这个艰难时期的，希望能得到一些建议和支持。"
    },
    {
      id: 4,
      title: "寻找适合CDKL5患者的辅助沟通设备",
      author: "科技爸爸",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2023-07-28",
      category: "护理经验",
      replies: 15,
      views: 110,
      excerpt: "我的孩子有严重的语言障碍，我们正在寻找合适的辅助沟通设备。有家长使用过眼动追踪或触屏设备吗？哪种效果更好？"
    },
    {
      id: 5,
      title: "如何与兄弟姐妹解释CDKL5",
      author: "爱心妈妈",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      date: "2023-07-20",
      category: "情绪支持",
      replies: 22,
      views: 145,
      excerpt: "我们有一个5岁的女儿和一个2岁的CDKL5患儿。大女儿开始问很多关于弟弟的问题。有什么建议如何向年幼的孩子解释这种情况？"
    }
  ];
  
  // 专家问答直播数据
  const expertLives = [
    {
      id: 1,
      title: "CDKL5的最新治疗进展",
      expert: "王教授",
      specialty: "儿科神经学",
      hospital: "北京儿童医院",
      date: "2023-09-15",
      time: "19:00-20:30",
      status: "即将开始",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "CDKL5患者的康复策略",
      expert: "李医生",
      specialty: "儿童康复医学",
      hospital: "上海康复医学中心",
      date: "2023-09-10",
      time: "20:00-21:30",
      status: "即将开始",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "CDKL5患者的饮食与营养",
      expert: "张营养师",
      specialty: "临床营养学",
      hospital: "广州儿童医院",
      date: "2023-08-28",
      time: "19:30-21:00",
      status: "已结束",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  // 筛选论坛话题
  const filteredTopics = activeCategory === 'all' 
    ? forumTopics 
    : forumTopics.filter(topic => topic.category === activeCategory);

  return (
    <Box>
      <PageHeader 
        title="社区论坛" 
        description="连接CDKL5患者家庭，分享经验和获取支持"
        breadcrumbs={[{ name: '社区论坛', path: '/community' }]}
      />

      <Container maxW="container.xl" py={8}>
        <Tabs colorScheme="brand" variant="enclosed" mb={8}>
          <TabList>
            <Tab>匿名交流区</Tab>
            <Tab>专家问答直播</Tab>
          </TabList>
          
          <TabPanels>
            {/* 匿名交流区 */}
            <TabPanel px={0}>
              <Box mb={8}>
                <SectionTitle 
                  title="匿名交流区" 
                  subtitle="在这里安全地分享您的经验和疑问，获得社区的支持"
                  align="left"
                />
                
                <Flex 
                  direction={{ base: "column", md: "row" }} 
                  justify="space-between"
                  align={{ base: "start", md: "center" }}
                  mb={6}
                >
                  <HStack spacing={4} mb={{ base: 4, md: 0 }}>
                    <Button 
                      colorScheme={activeCategory === 'all' ? "brand" : "gray"}
                      variant={activeCategory === 'all' ? "solid" : "outline"}
                      onClick={() => setActiveCategory('all')}
                    >
                      全部话题
                    </Button>
                    <Button 
                      colorScheme={activeCategory === '护理经验' ? "brand" : "gray"}
                      variant={activeCategory === '护理经验' ? "solid" : "outline"}
                      onClick={() => setActiveCategory('护理经验')}
                    >
                      护理经验
                    </Button>
                    <Button 
                      colorScheme={activeCategory === '情绪支持' ? "brand" : "gray"}
                      variant={activeCategory === '情绪支持' ? "solid" : "outline"}
                      onClick={() => setActiveCategory('情绪支持')}
                    >
                      情绪支持
                    </Button>
                  </HStack>
                  
                  <Button 
                    leftIcon={<AddIcon />} 
                    colorScheme="brand"
                  >
                    发布新话题
                  </Button>
                </Flex>
                
                <Stack spacing={4}>
                  {filteredTopics.map(topic => (
                    <Card key={topic.id} variant="outline">
                      <CardHeader pb={2}>
                        <Flex spacing="4">
                          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                            <Avatar src={topic.avatar} name={topic.author} />
                            <Box>
                              <Heading size="md">{topic.title}</Heading>
                              <HStack mt={1}>
                                <Text fontSize="sm">{topic.author}</Text>
                                <Text fontSize="sm" color="gray.500">
                                  <TimeIcon mr={1} />
                                  {topic.date}
                                </Text>
                                <Badge colorScheme={topic.category === '护理经验' ? 'blue' : 'purple'}>
                                  {topic.category}
                                </Badge>
                              </HStack>
                            </Box>
                          </Flex>
                        </Flex>
                      </CardHeader>
                      <CardBody py={3}>
                        <Text noOfLines={2}>{topic.excerpt}</Text>
                      </CardBody>
                      <CardFooter pt={0} justify="space-between">
                        <HStack>
                          <Tag size="md" variant="subtle" colorScheme="cyan">
                            <TagLeftIcon boxSize="12px" as={ViewIcon} />
                            <TagLabel>{topic.views} 浏览</TagLabel>
                          </Tag>
                          <Tag size="md" variant="subtle" colorScheme="pink">
                            <TagLeftIcon boxSize="12px" as={ChatIcon} />
                            <TagLabel>{topic.replies} 回复</TagLabel>
                          </Tag>
                        </HStack>
                        <Button variant="link" colorScheme="brand">
                          阅读全文
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </Stack>
                
                <Flex justify="center" mt={8}>
                  <Button variant="outline" colorScheme="brand">
                    加载更多
                  </Button>
                </Flex>
              </Box>
              
              <Box p={6} bg="blue.50" borderRadius="md" mt={8}>
                <Heading as="h3" size="md" mb={4}>
                  社区指南
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  <Box p={4} bg="white" borderRadius="md">
                    <Heading as="h4" size="sm" mb={2}>
                      尊重隐私
                    </Heading>
                    <Text fontSize="sm">
                      尊重所有成员的隐私，不要分享他人的个人信息。您可以使用匿名身份参与讨论。
                    </Text>
                  </Box>
                  <Box p={4} bg="white" borderRadius="md">
                    <Heading as="h4" size="sm" mb={2}>
                      相互支持
                    </Heading>
                    <Text fontSize="sm">
                      我们鼓励相互支持和积极交流，分享经验和建议，但请避免医疗建议。
                    </Text>
                  </Box>
                  <Box p={4} bg="white" borderRadius="md">
                    <Heading as="h4" size="sm" mb={2}>
                      友善交流
                    </Heading>
                    <Text fontSize="sm">
                      保持友善和尊重，即使在意见不同时。我们是一个相互支持的社区。
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
            
            {/* 专家问答直播 */}
            <TabPanel px={0}>
              <Box>
                <SectionTitle 
                  title="专家问答直播" 
                  subtitle="与CDKL5领域的专家进行实时交流，获取专业指导"
                  align="left"
                />
                
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
                  {expertLives.map(live => (
                    <Card key={live.id} overflow="hidden" variant="outline">
                      <Box position="relative">
                        <Box
                          as="img"
                          src={live.image}
                          alt={live.title}
                          height="200px"
                          width="100%"
                          objectFit="cover"
                        />
                        <Badge 
                          position="absolute" 
                          top={4} 
                          right={4} 
                          colorScheme={live.status === '即将开始' ? 'green' : 'gray'}
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {live.status}
                        </Badge>
                      </Box>
                      <CardBody>
                        <Heading as="h3" size="md" mb={3}>
                          {live.title}
                        </Heading>
                        <VStack align="start" spacing={2} mb={4}>
                          <HStack>
                            <Icon as={FaUserMd} color="brand.500" />
                            <Text fontWeight="medium">{live.expert}</Text>
                            <Text color="gray.600">({live.specialty})</Text>
                          </HStack>
                          <Text color="gray.600" fontSize="sm">
                            {live.hospital}
                          </Text>
                          <HStack>
                            <Icon as={FaCalendarAlt} color="brand.500" />
                            <Text>{live.date}</Text>
                          </HStack>
                          <HStack>
                            <Icon as={FaClock} color="brand.500" />
                            <Text>{live.time}</Text>
                          </HStack>
                        </VStack>
                        <Button 
                          leftIcon={<FaVideo />}
                          colorScheme={live.status === '即将开始' ? 'brand' : 'gray'}
                          isDisabled={live.status === '已结束'}
                          width="100%"
                        >
                          {live.status === '即将开始' ? '预约提醒' : '查看回放'}
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
                
                <Box p={6} bg="brand.50" borderRadius="md">
                  <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
                    <Box mb={{ base: 4, md: 0 }} maxW={{ md: '60%' }}>
                      <Heading as="h3" size="md" mb={2}>
                        提交问题
                      </Heading>
                      <Text>
                        您有什么问题想在下次直播中请专家解答？提前提交问题，增加被选中的机会。
                      </Text>
                    </Box>
                    <Button colorScheme="brand">
                      提交问题
                    </Button>
                  </Flex>
                </Box>
                
                <Box mt={10}>
                  <Heading as="h3" size="md" mb={6}>
                    往期直播回放
                  </Heading>
                  <Stack spacing={4}>
                    <Flex 
                      p={4} 
                      borderWidth="1px" 
                      borderRadius="md"
                      align="center"
                    >
                      <Icon as={FaVideo} boxSize={6} mr={4} color="brand.500" />
                      <Box flex="1">
                        <Heading as="h4" size="sm">
                          CDKL5患者的行为管理策略
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          陈医生 | 2023-07-15
                        </Text>
                      </Box>
                      <Button size="sm" colorScheme="brand" variant="outline">
                        观看回放
                      </Button>
                    </Flex>
                    <Flex 
                      p={4} 
                      borderWidth="1px" 
                      borderRadius="md"
                      align="center"
                    >
                      <Icon as={FaVideo} boxSize={6} mr={4} color="brand.500" />
                      <Box flex="1">
                        <Heading as="h4" size="sm">
                          CDKL5相关癫痫的最新治疗方法
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          刘教授 | 2023-06-20
                        </Text>
                      </Box>
                      <Button size="sm" colorScheme="brand" variant="outline">
                        观看回放
                      </Button>
                    </Flex>
                    <Flex 
                      p={4} 
                      borderWidth="1px" 
                      borderRadius="md"
                      align="center"
                    >
                      <Icon as={FaVideo} boxSize={6} mr={4} color="brand.500" />
                      <Box flex="1">
                        <Heading as="h4" size="sm">
                          CDKL5家庭心理健康维护
                        </Heading>
                        <Text fontSize="sm" color="gray.600">
                          张心理师 | 2023-05-18
                        </Text>
                      </Box>
                      <Button size="sm" colorScheme="brand" variant="outline">
                        观看回放
                      </Button>
                    </Flex>
                  </Stack>
                  <Flex justify="center" mt={6}>
                    <Button variant="link" colorScheme="brand">
                      查看更多回放
                    </Button>
                  </Flex>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default Community;

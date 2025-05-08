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
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListIcon,
  Badge,
  HStack,
  VStack
} from '@chakra-ui/react';
import { 
  CheckCircleIcon, 
  CalendarIcon,
  ExternalLinkIcon 
} from '@chakra-ui/icons';
import { 
  FaHandHoldingHeart, 
  FaUsers, 
  FaFileSignature, 
  FaGlobe,
  FaHandsHelping,
  FaDonate,
  FaRegCalendarAlt
} from 'react-icons/fa';

import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const Advocacy = () => {
  // 募捐项目数据
  const donationProjects = [
    {
      id: 1,
      title: "CDKL5基因治疗研究基金",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      goal: 500000,
      current: 325000,
      donors: 1280,
      description: "支持开发针对CDKL5缺陷症候群的创新基因治疗方法，为患者带来希望。",
      tags: ["研究", "基因治疗"]
    },
    {
      id: 2,
      title: "CDKL5患者家庭援助计划",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      goal: 300000,
      current: 210000,
      donors: 950,
      description: "为CDKL5患者家庭提供经济援助，帮助他们获取必要的医疗设备和康复服务。",
      tags: ["家庭支持", "医疗援助"]
    },
    {
      id: 3,
      title: "CDKL5认知与宣传项目",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      goal: 200000,
      current: 85000,
      donors: 620,
      description: "提高公众对CDKL5缺陷症候群的认识，促进早期诊断和干预。",
      tags: ["宣传", "教育"]
    }
  ];
  
  // 志愿者机会数据
  const volunteerOpportunities = [
    {
      title: "CDKL5家庭支持志愿者",
      description: "为CDKL5患者家庭提供情感支持和日常帮助，包括陪伴、倾听和实际援助。",
      requirements: ["良好的沟通能力", "有爱心和耐心", "每周至少4小时"],
      location: "线上或线下",
      icon: FaHandsHelping
    },
    {
      title: "CDKL5宣传活动志愿者",
      description: "协助组织和参与CDKL5宣传活动，提高公众认识，包括社交媒体宣传、讲座和社区活动。",
      requirements: ["有组织能力", "熟悉社交媒体", "有创意和热情"],
      location: "线上和线下",
      icon: FaGlobe
    },
    {
      title: "CDKL5科研志愿者",
      description: "协助CDKL5研究项目，包括数据收集、问卷调查和研究参与者招募。",
      requirements: ["医学或科研背景优先", "细致认真", "良好的记录能力"],
      location: "主要线下",
      icon: FaFileSignature
    }
  ];
  
  // 政策倡议数据
  const policyInitiatives = [
    {
      title: "罕见病医疗保障政策完善",
      description: "呼吁将CDKL5等罕见病纳入医疗保险特殊报销目录，减轻患者家庭经济负担。",
      signatures: 8750,
      goal: 10000,
      status: "进行中"
    },
    {
      title: "罕见病药物研发激励机制",
      description: "推动建立罕见病药物研发的税收优惠和审批绿色通道，加速治疗方法的开发。",
      signatures: 12500,
      goal: 15000,
      status: "进行中"
    },
    {
      title: "CDKL5患者教育权益保障",
      description: "倡导为CDKL5等特殊需要儿童提供更加包容和适应性的教育环境和资源。",
      signatures: 7200,
      goal: 8000,
      status: "进行中"
    }
  ];
  
  // 宣传日活动数据
  const awarenessActivities = [
    {
      title: "CDKL5全球线上研讨会",
      date: "2023-10-25",
      time: "19:00-21:00",
      location: "线上",
      description: "邀请全球CDKL5专家分享最新研究进展和治疗方法，为患者家庭提供信息和希望。"
    },
    {
      title: ""绿光行动"—CDKL5宣传徒步",
      date: "2023-10-26",
      time: "9:00-12:00",
      location: "各主要城市",
      description: "组织全国各地的徒步活动，参与者穿着绿色服装，提高公众对CDKL5的认识。"
    },
    {
      title: "CDKL5患者艺术展",
      date: "2023-10-27 - 2023-11-03",
      time: "全天",
      location: "北京、上海、广州等城市",
      description: "展示CDKL5患者的艺术作品，展现他们的才华和潜力，改变公众对罕见病的认知。"
    },
    {
      title: "社交媒体宣传日",
      date: "2023-10-28",
      time: "全天",
      location: "线上",
      description: "鼓励大家在社交媒体上使用#CDKL5Awareness标签分享信息，扩大宣传影响力。"
    }
  ];

  return (
    <Box>
      <PageHeader 
        title="行动倡导" 
        description="加入我们的行动，为CDKL5患者发声，推动研究和政策变革"
        breadcrumbs={[{ name: '行动倡导', path: '/advocacy' }]}
      />

      <Container maxW="container.xl" py={8}>
        {/* 募捐通道 */}
        <Box mb={16}>
          <SectionTitle 
            title="募捐通道" 
            subtitle="您的捐助将直接支持CDKL5研究和患者家庭"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {donationProjects.map(project => (
              <Card key={project.id} overflow="hidden" variant="outline">
                <Image 
                  src={project.image}
                  alt={project.title}
                  height="200px"
                  objectFit="cover"
                />
                <CardBody>
                  <Stack mt="2" spacing="3">
                    <Heading size="md">{project.title}</Heading>
                    <HStack spacing={2}>
                      {project.tags.map((tag, index) => (
                        <Badge key={index} colorScheme="brand" variant="subtle">
                          {tag}
                        </Badge>
                      ))}
                    </HStack>
                    <Text>{project.description}</Text>
                    <Box>
                      <Flex justify="space-between" mb={2}>
                        <Text fontWeight="bold">
                          ¥{project.current.toLocaleString()}
                        </Text>
                        <Text>
                          目标: ¥{project.goal.toLocaleString()}
                        </Text>
                      </Flex>
                      <Progress 
                        value={(project.current / project.goal) * 100} 
                        colorScheme="brand"
                        size="sm"
                        borderRadius="full"
                        mb={2}
                      />
                      <Text fontSize="sm" color="gray.600">
                        {project.donors} 位爱心人士已捐款
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button 
                    leftIcon={<FaDonate />}
                    variant="solid" 
                    colorScheme="brand"
                    width="100%"
                  >
                    立即捐款
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
          
          <Box mt={10} p={6} bg="gray.50" borderRadius="md">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Stat>
                <StatLabel>总捐款金额</StatLabel>
                <StatNumber>¥1,562,380</StatNumber>
                <StatHelpText>来自全国各地的爱心</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>捐款人次</StatLabel>
                <StatNumber>5,280</StatNumber>
                <StatHelpText>每一份爱心都珍贵</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>受益患者家庭</StatLabel>
                <StatNumber>320</StatNumber>
                <StatHelpText>直接改变生活</StatHelpText>
              </Stat>
            </SimpleGrid>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 志愿者招募 */}
        <Box mb={16}>
          <SectionTitle 
            title="志愿者招募" 
            subtitle="贡献您的时间和才能，为CDKL5社区提供支持"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={8}>
            {volunteerOpportunities.map((opportunity, index) => (
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
                  <Icon as={opportunity.icon} w={8} h={8} />
                </Flex>
                <Heading as="h3" size="md" mb={3}>
                  {opportunity.title}
                </Heading>
                <Text mb={4}>
                  {opportunity.description}
                </Text>
                <Box mb={4}>
                  <Text fontWeight="bold" mb={2}>
                    要求:
                  </Text>
                  <List spacing={1}>
                    {opportunity.requirements.map((req, i) => (
                      <ListItem key={i}>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        {req}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Text mb={4}>
                  <strong>地点:</strong> {opportunity.location}
                </Text>
                <Button colorScheme="brand" width="100%">
                  申请加入
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box p={6} bg="blue.50" borderRadius="md">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="md" mb={4}>
                  成为CDKL5志愿者
                </Heading>
                <Text mb={4}>
                  无论您有什么技能或专长，都可以为CDKL5社区做出贡献。我们需要各种背景的志愿者，包括医疗专业人士、教育工作者、IT专家、设计师、写作者等。
                </Text>
                <Text>
                  加入我们，用您的专业和热情，帮助改善CDKL5患者及其家庭的生活质量。
                </Text>
              </Box>
              <Box>
                <FormControl mb={4}>
                  <FormLabel>您感兴趣的志愿领域</FormLabel>
                  <Stack spacing={2}>
                    <Checkbox>家庭支持</Checkbox>
                    <Checkbox>宣传教育</Checkbox>
                    <Checkbox>活动组织</Checkbox>
                    <Checkbox>专业技能支持</Checkbox>
                    <Checkbox>其他（请在申请表中说明）</Checkbox>
                  </Stack>
                </FormControl>
                <Button colorScheme="brand" width="100%">
                  获取志愿者申请表
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 政策倡议联名 */}
        <Box mb={16}>
          <SectionTitle 
            title="政策倡议联名" 
            subtitle="加入我们的声音，推动政策变革，改善CDKL5患者的生活"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {policyInitiatives.map((initiative, index) => (
              <Box 
                key={index}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                borderLeft="4px solid"
                borderColor="brand.500"
              >
                <Heading as="h3" size="md" mb={3}>
                  {initiative.title}
                </Heading>
                <Text mb={4}>
                  {initiative.description}
                </Text>
                <Box mb={4}>
                  <Flex justify="space-between" mb={2}>
                    <Text fontWeight="bold">
                      {initiative.signatures.toLocaleString()} 签名
                    </Text>
                    <Text>
                      目标: {initiative.goal.toLocaleString()}
                    </Text>
                  </Flex>
                  <Progress 
                    value={(initiative.signatures / initiative.goal) * 100} 
                    colorScheme="brand"
                    size="sm"
                    borderRadius="full"
                    mb={2}
                  />
                  <Badge colorScheme="green">{initiative.status}</Badge>
                </Box>
                <Button 
                  leftIcon={<FaFileSignature />}
                  colorScheme="brand" 
                  width="100%"
                >
                  签署倡议
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box mt={10} p={6} bg="gray.50" borderRadius="md">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="md" mb={4}>
                  提交新的政策倡议
                </Heading>
                <Text>
                  您有改善CDKL5患者生活的政策建议吗？我们欢迎您提交新的政策倡议，共同推动变革。
                </Text>
              </Box>
              <Flex justify="flex-end" align="center">
                <Button colorScheme="brand">
                  提交倡议
                </Button>
              </Flex>
            </SimpleGrid>
          </Box>
        </Box>

        <Divider my={16} />

        {/* 全球CDKL5宣传日 */}
        <Box>
          <SectionTitle 
            title="全球CDKL5宣传日活动" 
            subtitle="每年10月25日是全球CDKL5宣传日，加入我们的活动提高公众认知"
          />
          
          <Box 
            p={6} 
            bg="brand.50" 
            borderRadius="md"
            mb={8}
          >
            <Flex 
              direction={{ base: "column", md: "row" }}
              align="center"
            >
              <Icon 
                as={FaRegCalendarAlt} 
                boxSize={{ base: 12, md: 16 }} 
                color="brand.500"
                mr={{ md: 6 }}
                mb={{ base: 4, md: 0 }}
              />
              <Box>
                <Heading as="h3" size="lg" mb={2}>
                  2023年全球CDKL5宣传日
                </Heading>
                <Text fontSize="xl">
                  10月25日 - 10月31日
                </Text>
                <Text mt={2}>
                  今年的主题是"点亮绿光，照亮希望"，象征CDKL5研究的希望之光。
                </Text>
              </Box>
            </Flex>
          </Box>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={8}>
            {awarenessActivities.map((activity, index) => (
              <Box 
                key={index}
                p={6}
                boxShadow="md"
                borderRadius="lg"
                bg="white"
              >
                <Heading as="h3" size="md" mb={3}>
                  {activity.title}
                </Heading>
                <VStack align="start" spacing={2} mb={4}>
                  <HStack>
                    <Icon as={CalendarIcon} color="brand.500" />
                    <Text>{activity.date}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaClock} color="brand.500" />
                    <Text>{activity.time}</Text>
                  </HStack>
                  <HStack align="flex-start">
                    <Icon as={FaMapMarkerAlt} mt={1} color="brand.500" />
                    <Text>{activity.location}</Text>
                  </HStack>
                </VStack>
                <Text mb={4}>
                  {activity.description}
                </Text>
                <Button colorScheme="brand" variant="outline" width="100%">
                  了解详情
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          
          <Box p={6} bg="green.50" borderRadius="md">
            <Heading as="h3" size="md" mb={4} textAlign="center">
              如何参与CDKL5宣传日
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Box p={4} bg="white" borderRadius="md" textAlign="center">
                <Icon as={FaUsers} boxSize={10} color="brand.500" mb={4} />
                <Heading as="h4" size="sm" mb={2}>
                  参加活动
                </Heading>
                <Text fontSize="sm">
                  加入我们组织的线上或线下宣传活动，共同提高CDKL5的公众认知度。
                </Text>
              </Box>
              <Box p={4} bg="white" borderRadius="md" textAlign="center">
                <Icon as={FaGlobe} boxSize={10} color="brand.500" mb={4} />
                <Heading as="h4" size="sm" mb={2}>
                  社交媒体宣传
                </Heading>
                <Text fontSize="sm">
                  在社交媒体上分享CDKL5信息，使用#CDKL5Awareness标签扩大影响力。
                </Text>
              </Box>
              <Box p={4} bg="white" borderRadius="md" textAlign="center">
                <Icon as={FaHandHoldingHeart} boxSize={10} color="brand.500" mb={4} />
                <Heading as="h4" size="sm" mb={2}>
                  捐赠支持
                </Heading>
                <Text fontSize="sm">
                  通过捐款支持CDKL5研究和患者家庭，帮助我们继续开展宣传活动。
                </Text>
              </Box>
            </SimpleGrid>
            <Flex justify="center" mt={6}>
              <Button colorScheme="brand">
                注册参与宣传日活动
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Advocacy;

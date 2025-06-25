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
  Link,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaBook, 
  FaHeartbeat, 
  FaHandsHelping, 
  FaUsers, 
  FaArrowRight,
  FaSearch,
  FaRegNewspaper,
  FaPhoneAlt,
  FaDownload
} from 'react-icons/fa';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import NewsCard from '../components/NewsCard';

const Home = () => {
  // 模拟数据
  const latestNews = [
    {
      id: 1,
      title: '2023年CDKL5国际研讨会圆满结束',
      date: '2023-07-15',
      image: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
      summary: '来自全球各地的研究人员和医疗专家共同探讨了CDKL5疾病的最新研究成果和治疗方案。',
      category: '会议',
      link: '#'
    },
    {
      id: 2,
      title: '新型CDKL5基因治疗技术进入临床试验阶段',
      date: '2023-06-28',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
      summary: '这项突破性技术有望为CDKL5患者带来全新的治疗选择，目前已进入临床试验第二阶段。',
      category: '研究',
      link: '#'
    },
    {
      id: 3,
      title: 'CDKL5患者家庭支持计划启动',
      date: '2023-06-10',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80',
      summary: '该计划旨在为CDKL5患者家庭提供全方位的支持，包括心理咨询、护理培训和经济援助。',
      category: '支持',
      link: '#'
    }
  ];

  const quickNavItems = [
    { 
      title: '疾病知识库', 
      description: '了解CDKL5相关疾病的基本知识、症状和诊断方法', 
      icon: FaBook,
      link: '/about'
    },
    { 
      title: '患者支持', 
      description: '获取患者护理指南、康复资源和医疗中心信息', 
      icon: FaHeartbeat,
      link: '/support'
    },
    { 
      title: '参与研究', 
      description: '了解最新的科研进展和临床试验招募信息', 
      icon: FaSearch,
      link: '/research'
    },
    { 
      title: '社区交流', 
      description: '加入患者和家属的交流社区，分享经验和获取支持', 
      icon: FaUsers,
      link: '/community'
    }
  ];

  return (
    <Box>
      {/* 英雄区域 */}
      <Hero 
        title="共同应对CDKL5相关疾病"
        subtitle="我们致力于为CDKL5患者家庭提供支持、促进研究发展并提高公众认知"
        image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        ctaText="了解更多"
        ctaLink="/about"
      />

      {/* 疾病速览 */}
      <Container maxW="container.xl" py={16}>
        <SectionTitle 
          title="CDKL5疾病速览" 
          subtitle="CDKL5缺陷症候群是一种罕见的遗传性神经发育障碍，主要影响大脑发育和功能"
        />
        
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={8}
          alignItems="center"
        >
          <GridItem>
            <Box
              as="img"
              rounded="lg"
              shadow="lg"
              src="https://images.unsplash.com/photo-1559757175-7b21e5afae2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1289&q=80"
              alt="CDKL5疾病"
              width="100%"
            />
          </GridItem>
          <GridItem>
            <Stack spacing={5}>
              <Box>
                <Heading as="h3" size="md" mb={2} color="brand.600">
                  什么是CDKL5?
                </Heading>
                <Text>
                  CDKL5基因编码一种称为环胞苷激酶样5的蛋白质，这种蛋白质对大脑发育至关重要。CDKL5基因突变会导致这种蛋白质功能异常，引起一系列神经系统问题。
                </Text>
              </Box>
              
              <Box>
                <Heading as="h3" size="md" mb={2} color="brand.600">
                  主要症状
                </Heading>
                <Text>
                  CDKL5缺陷症候群的主要症状包括早发性难治性癫痫、严重的神经发育迟缓、智力障碍、运动功能障碍以及视觉问题。症状通常在出生后几个月内出现。
                </Text>
              </Box>
              
              <Box>
                <Heading as="h3" size="md" mb={2} color="brand.600">
                  诊断与治疗
                </Heading>
                <Text>
                  诊断主要通过基因检测确认。目前尚无特效治疗方法，主要采取对症治疗，包括抗癫痫药物、物理治疗、职业治疗和语言治疗等综合干预措施。
                </Text>
              </Box>
              
              <Button
                as={RouterLink}
                to="/about"
                variant="outline"
                colorScheme="brand"
                rightIcon={<FaArrowRight />}
                alignSelf="flex-start"
              >
                了解更多
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Container>

      {/* 最新动态 */}
      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <SectionTitle 
            title="最新动态" 
            subtitle="了解CDKL5领域的最新研究进展、活动和新闻"
          />
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {latestNews.map(news => (
              <NewsCard 
                key={news.id}
                title={news.title}
                date={news.date}
                image={news.image}
                summary={news.summary}
                category={news.category}
                link={news.link}
              />
            ))}
          </SimpleGrid>
          
          <Flex justify="center" mt={10}>
            <Button
              as={RouterLink}
              to="/research"
              variant="outline"
              colorScheme="brand"
              rightIcon={<FaArrowRight />}
            >
              查看更多动态
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* 紧急求助入口 */}
      <Box bg="brand.600" py={12}>
        <Container maxW="container.xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
          >
            <Box color="white" mb={{ base: 6, md: 0 }} maxW={{ md: '60%' }}>
              <Heading as="h2" size="xl" mb={4}>
                需要紧急帮助?
              </Heading>
              <Text fontSize="lg">
                我们提供24小时紧急咨询和转诊服务，帮助CDKL5患者及家庭获取及时的医疗支持和危机干预。
              </Text>
            </Box>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button
                bg="white"
                color="brand.600"
                size="lg"
                leftIcon={<FaPhoneAlt />}
                _hover={{ bg: 'gray.100' }}
              >
                紧急热线
              </Button>
              <Button
                variant="outline"
                colorScheme="white"
                size="lg"
                leftIcon={<FaDownload />}
                _hover={{ bg: 'brand.700' }}
              >
                应急指南
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* 快速导航 */}
      <Container maxW="container.xl" py={16}>
        <SectionTitle 
          title="快速导航" 
          subtitle="根据您的需求，快速找到相关资源和支持"
        />
        
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {quickNavItems.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Home;

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Avatar,
  Badge,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Icon,
  Link,
  Flex,
  Divider,
  Image,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';

// 专家团队数据
const experts = [
  {
    name: '张教授',
    title: '神经科学家',
    institution: '北京医科大学',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    specialization: 'CDKL5基因研究',
    bio: '张教授在神经基因研究领域拥有20年经验，专注于CDKL5基因突变与癫痫的关联研究。'
  },
  {
    name: '李医生',
    title: '儿科神经专家',
    institution: '上海儿童医院',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    specialization: '儿童癫痫治疗',
    bio: '李医生致力于开发针对CDKL5疾病的新型治疗方案，在临床治疗方面有丰富经验。'
  },
  {
    name: '王研究员',
    title: '分子遗传学家',
    institution: '国家基因研究中心',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    specialization: '基因编辑技术',
    bio: '王研究员主导多项CDKL5基因编辑研究项目，为未来的基因治疗奠定基础。'
  },
  {
    name: '陈博士',
    title: '康复治疗专家',
    institution: '广州康复医学院',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    specialization: 'CDKL5患者康复',
    bio: '陈博士开发了多套针对CDKL5患者的康复训练方案，在改善患者生活质量方面取得显著成果。'
  }
];

// 合作机构数据
const partners = [
  {
    name: '国际CDKL5研究基金会',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '中国罕见病联盟',
    logo: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '儿童神经发育障碍研究中心',
    logo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '希望基因治疗中心',
    logo: 'https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '全球癫痫研究联盟',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: '亚太罕见病组织',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      toast({
        title: '消息已发送',
        description: '感谢您的留言，我们会尽快回复。',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <PageLayout title="联系我们">
      <Container maxW="container.xl" py={10}>
        {/* 联系信息部分 */}
        <Box mb={12} textAlign="center">
          <Heading as="h1" size="xl" mb={4}>联系我们</Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            我们致力于为CDKL5患者及其家庭提供支持，欢迎通过以下方式与我们联系，分享您的故事、提出问题或加入我们的行动。
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
            <VStack p={5} shadow="md" borderWidth="1px" borderRadius="md" alignItems="center">
              <Icon as={FaEnvelope} w={10} h={10} color="blue.500" />
              <Text fontWeight="bold" fontSize="lg">电子邮件</Text>
              <Link href="mailto:contact@cdkl5support.org" color="blue.500">contact@cdkl5support.org</Link>
            </VStack>
            
            <VStack p={5} shadow="md" borderWidth="1px" borderRadius="md" alignItems="center">
              <Icon as={FaPhone} w={10} h={10} color="blue.500" />
              <Text fontWeight="bold" fontSize="lg">热线电话</Text>
              <Text>400-800-CDKL (2355)</Text>
              <Text fontSize="sm">工作日 9:00-17:00</Text>
            </VStack>
            
            <VStack p={5} shadow="md" borderWidth="1px" borderRadius="md" alignItems="center">
              <Icon as={FaMapMarkerAlt} w={10} h={10} color="blue.500" />
              <Text fontWeight="bold" fontSize="lg">办公地址</Text>
              <Text textAlign="center">北京市海淀区中关村南大街5号</Text>
              <Text fontSize="sm">邮编: 100081</Text>
            </VStack>
          </SimpleGrid>
        </Box>
        
        {/* 专家团队部分 */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">专家团队</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {experts.map((expert, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <VStack spacing={4}>
                  <Avatar size="xl" src={expert.image} name={expert.name} />
                  <Box textAlign="center">
                    <Text fontWeight="bold" fontSize="lg">{expert.name}</Text>
                    <Text color="blue.500">{expert.title}</Text>
                    <Text fontSize="sm">{expert.institution}</Text>
                    <Badge colorScheme="purple" mt={2}>{expert.specialization}</Badge>
                  </Box>
                  <Text fontSize="sm" noOfLines={3}>{expert.bio}</Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        
        {/* 合作机构LOGO墙 */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">合作机构</Heading>
          <Wrap spacing="30px" justify="center">
            {partners.map((partner, index) => (
              <WrapItem key={index}>
                <Box 
                  p={4} 
                  shadow="md" 
                  borderWidth="1px" 
                  borderRadius="md" 
                  width="200px" 
                  height="150px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    maxW="120px" 
                    maxH="80px" 
                    mb={2}
                  />
                  <Text fontSize="sm" textAlign="center" fontWeight="medium">
                    {partner.name}
                  </Text>
                </Box>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        
        {/* 留言表单 */}
        <Box mb={12}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">给我们留言</Heading>
          <Box maxW="2xl" mx="auto" p={6} shadow="lg" borderWidth="1px" borderRadius="lg">
            <form onSubmit={handleSubmit}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                <FormControl isRequired>
                  <FormLabel>姓名</FormLabel>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="请输入您的姓名"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>电子邮箱</FormLabel>
                  <Input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="请输入您的电子邮箱"
                  />
                </FormControl>
              </SimpleGrid>
              
              <FormControl isRequired mb={4}>
                <FormLabel>主题</FormLabel>
                <Input 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  placeholder="请输入留言主题"
                />
              </FormControl>
              
              <FormControl isRequired mb={6}>
                <FormLabel>留言内容</FormLabel>
                <Textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="请输入您的留言内容"
                  rows={6}
                />
              </FormControl>
              
              <Button 
                type="submit" 
                colorScheme="blue" 
                size="lg" 
                width="full" 
                isLoading={isSubmitting}
                loadingText="提交中"
              >
                提交留言
              </Button>
            </form>
          </Box>
        </Box>
        
        {/* 社交媒体链接 */}
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={6}>关注我们</Heading>
          <Text mb={4}>通过社交媒体了解最新动态，参与我们的线上活动</Text>
          <HStack spacing={4} justify="center">
            <Link href="#" isExternal>
              <Icon as={FaTwitter} w={8} h={8} color="twitter.500" />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} w={8} h={8} color="facebook.500" />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} w={8} h={8} color="pink.500" />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedin} w={8} h={8} color="linkedin.500" />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaYoutube} w={8} h={8} color="red.500" />
            </Link>
          </HStack>
        </Box>
      </Container>
    </PageLayout>
  );
};

export default Contact;

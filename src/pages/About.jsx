import React from 'react';
import { 
  Box, 
  Container, 
  SimpleGrid, 
  Heading, 
  Text, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Image,
  Flex,
  Divider,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Icon
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import { FaDna, FaBrain, FaStethoscope, FaUserMd } from 'react-icons/fa';

import PageHeader from '../components/PageHeader';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <Box>
      <PageHeader 
        title="关于CDKL5" 
        description="了解CDKL5缺陷症候群的详细信息、病因、症状和治疗方案"
        breadcrumbs={[{ name: '关于CDKL5', path: '/about' }]}
      />

      <Container maxW="container.xl" py={8}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={16}>
          <Box>
            <SectionTitle 
              title="疾病介绍" 
              align="left"
            />
            <Text mb={4}>
              CDKL5缺陷症候群是一种罕见的X连锁显性遗传性疾病，主要由CDKL5基因突变引起。CDKL5基因位于X染色体上，负责产生环胞苷激酶样5蛋白，这种蛋白对大脑发育和功能至关重要。
            </Text>
            <Text mb={4}>
              该疾病最初被认为是Rett综合征的一种变异形式，但现在已被确认为一种独立的疾病实体。全球范围内，CDKL5缺陷症候群的发病率约为1/40,000-1/60,000。
            </Text>
            <Text>
              由于其罕见性和症状与其他神经发育障碍的相似性，CDKL5缺陷症候群常常被误诊或延迟诊断。提高对这种疾病的认识对于早期干预和患者管理至关重要。
            </Text>
          </Box>
          <Box>
            <Image 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80" 
              alt="医学研究" 
              borderRadius="md"
              shadow="md"
            />
          </Box>
        </SimpleGrid>

        <Divider my={16} />

        {/* 病因与遗传机制 */}
        <Box mb={16}>
          <SectionTitle 
            title="病因与遗传机制" 
            subtitle="了解CDKL5缺陷症候群的遗传学基础和分子机制"
          />
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Image 
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&q=80" 
                alt="基因研究" 
                borderRadius="md"
                shadow="md"
                mb={{ base: 6, md: 0 }}
              />
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4} color="brand.600">
                <Flex align="center">
                  <Icon as={FaDna} mr={2} />
                  基因突变
                </Flex>
              </Heading>
              <Text mb={6}>
                CDKL5缺陷症候群是由CDKL5基因（环胞苷激酶样5基因）的突变引起的。这些突变可能是缺失、错义、无义或剪接位点突变，导致CDKL5蛋白功能丧失或减弱。
              </Text>
              
              <Heading as="h3" size="md" mb={4} color="brand.600">
                <Flex align="center">
                  <Icon as={FaBrain} mr={2} />
                  分子机制
                </Flex>
              </Heading>
              <Text mb={6}>
                CDKL5蛋白主要在大脑中表达，参与神经元发育、突触形成和信号传导。它通过磷酸化多种底物来调节这些过程。CDKL5功能缺失导致神经元连接异常和神经网络功能障碍。
              </Text>
              
              <Heading as="h3" size="md" mb={4} color="brand.600">
                遗传模式
              </Heading>
              <Text>
                CDKL5基因位于X染色体上，疾病呈X连锁显性遗传。由于女性有两条X染色体，一条正常的X染色体可以部分补偿突变，因此女性患者症状可能较轻。而男性只有一条X染色体，如果携带突变，通常表现为更严重的症状。大多数病例是由新发突变引起的，而不是从父母那里遗传的。
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Divider my={16} />

        {/* 症状与诊断 */}
        <Box mb={16}>
          <SectionTitle 
            title="症状与诊断" 
            subtitle="识别CDKL5缺陷症候群的临床表现和诊断方法"
          />
          
          <Tabs colorScheme="brand" mb={8}>
            <TabList>
              <Tab>核心症状</Tab>
              <Tab>诊断方法</Tab>
              <Tab>鉴别诊断</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                  <Box>
                    <Heading as="h4" size="md" mb={4} color="brand.600">
                      早发性癫痫
                    </Heading>
                    <Text mb={4}>
                      大多数患者在生命最初3个月内出现癫痫发作，通常表现为婴儿痉挛、强直性发作或肌阵挛发作。这些癫痫发作往往对治疗反应不佳，属于难治性癫痫。
                    </Text>
                    
                    <Heading as="h4" size="md" mb={4} color="brand.600">
                      发育迟缓
                    </Heading>
                    <Text>
                      患者通常表现为严重的全面性发育迟缓，包括运动、语言、认知和社交能力的延迟。许多患者无法独立行走或说话。
                    </Text>
                  </Box>
                  <Box>
                    <Heading as="h4" size="md" mb={4} color="brand.600">
                      其他神经系统症状
                    </Heading>
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        肌张力异常（通常为低张力）
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        手部刻板动作
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        睡眠障碍
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        视觉注视和追踪困难
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        皮质视力障碍
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        自闭症特征
                      </ListItem>
                    </List>
                  </Box>
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Heading as="h4" size="md" mb={4} color="brand.600">
                    基因检测
                  </Heading>
                  <Text mb={6}>
                    CDKL5缺陷症候群的确诊主要依靠基因检测。可以通过以下方法进行：
                  </Text>
                  <List spacing={3} mb={6}>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      目标基因测序：专门检测CDKL5基因的突变
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      全外显子组测序：检测所有蛋白编码区域的变异
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      全基因组测序：提供最全面的遗传信息
                    </ListItem>
                  </List>
                  
                  <Heading as="h4" size="md" mb={4} color="brand.600">
                    辅助检查
                  </Heading>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      脑电图(EEG)：记录异常的脑电活动
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      磁共振成像(MRI)：评估脑部结构
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      神经心理学评估：评估认知和行为功能
                    </ListItem>
                  </List>
                </Box>
              </TabPanel>
              <TabPanel>
                <Text mb={4}>
                  CDKL5缺陷症候群需要与以下疾病进行鉴别诊断：
                </Text>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading as="h4" size="md" mb={3} color="brand.600">
                      Rett综合征
                    </Heading>
                    <Text>
                      由MECP2基因突变引起，临床表现相似，但Rett综合征癫痫发作通常起病较晚，且有特征性的发育退行。
                    </Text>
                  </Box>
                  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading as="h4" size="md" mb={3} color="brand.600">
                      婴儿痉挛症
                    </Heading>
                    <Text>
                      一种婴儿期癫痫综合征，表现为婴儿痉挛发作，但病因多样，不一定有CDKL5基因突变。
                    </Text>
                  </Box>
                  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading as="h4" size="md" mb={3} color="brand.600">
                      Angelman综合征
                    </Heading>
                    <Text>
                      由UBE3A基因异常引起，也表现为发育迟缓和癫痫，但通常有特征性的面容和过度笑。
                    </Text>
                  </Box>
                  <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading as="h4" size="md" mb={3} color="brand.600">
                      其他早发性癫痫性脑病
                    </Heading>
                    <Text>
                      如SCN1A、SCN2A、STXBP1等基因相关的早发性癫痫性脑病，需通过基因检测鉴别。
                    </Text>
                  </Box>
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Divider my={16} />

        {/* 治疗与护理 */}
        <Box>
          <SectionTitle 
            title="治疗与护理" 
            subtitle="了解CDKL5缺陷症候群的治疗策略和日常护理方法"
          />
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h3" size="md" mb={4} color="brand.600">
                <Flex align="center">
                  <Icon as={FaStethoscope} mr={2} />
                  当前治疗方法
                </Flex>
              </Heading>
              
              <Accordion allowToggle mb={6}>
                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        抗癫痫治疗
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <Text mb={2}>
                      控制癫痫发作是治疗的首要目标，常用药物包括：
                    </Text>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        丙戊酸钠
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        拉莫三嗪
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        托吡酯
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        氯硝西泮
                      </ListItem>
                      <ListItem>
                        <ListIcon as={WarningIcon} color="orange.500" />
                        注意：许多患者对抗癫痫药物反应不佳，可能需要联合用药
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        非药物治疗
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        生酮饮食：一种高脂肪、低碳水化合物的饮食，可能对部分患者的癫痫控制有帮助
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        迷走神经刺激：通过植入装置刺激迷走神经，可能减少癫痫发作
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        脑深部刺激：对于特定类型的癫痫可能有效
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h3>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        康复治疗
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4}>
                    <Text mb={2}>
                      综合康复对改善患者功能至关重要：
                    </Text>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        物理治疗：改善运动功能和肌张力
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        职业治疗：提高日常生活能力
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        言语治疗：改善沟通能力
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckCircleIcon} color="green.500" />
                        辅助技术：如眼动追踪设备等辅助沟通工具
                      </ListItem>
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={4} color="brand.600">
                <Flex align="center">
                  <Icon as={FaUserMd} mr={2} />
                  日常护理与管理
                </Flex>
              </Heading>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
                <Heading as="h4" size="sm" mb={2}>
                  营养支持
                </Heading>
                <Text>
                  许多患者有进食困难，可能需要特殊的饮食计划或胃造瘘管喂养。应关注营养状态和生长发育。
                </Text>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
                <Heading as="h4" size="sm" mb={2}>
                  睡眠管理
                </Heading>
                <Text>
                  建立规律的睡眠习惯，必要时在医生指导下使用褪黑素等助眠药物。良好的睡眠对减少癫痫发作和改善日间功能很重要。
                </Text>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
                <Heading as="h4" size="sm" mb={2}>
                  呼吸道护理
                </Heading>
                <Text>
                  预防呼吸道感染，学习正确的体位引流和痰液清除技术。必要时使用雾化吸入和吸痰设备。
                </Text>
              </Box>
              
              <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="sm" mb={2}>
                  骨骼健康
                </Heading>
                <Text>
                  定期评估骨密度，补充钙和维生素D。注意预防骨折和脊柱侧弯。
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
          
          <Box mt={10} p={6} bg="blue.50" borderRadius="md">
            <Heading as="h3" size="md" mb={4} color="brand.600">
              未来治疗展望
            </Heading>
            <Text>
              目前，多种针对CDKL5缺陷症候群的基因治疗和靶向药物正在研究中，包括基因替代疗法、反义寡核苷酸治疗和小分子药物。这些创新疗法有望在未来为患者带来更有效的治疗选择。我们鼓励患者家庭关注最新的临床试验信息，并考虑在条件允许的情况下参与相关研究。
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

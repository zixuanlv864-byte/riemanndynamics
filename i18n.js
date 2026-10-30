(() => {
  const STORAGE_KEY = 'riemann-language';
  const DEFAULT_LANGUAGE = 'en';
  let language = DEFAULT_LANGUAGE;
  try { language = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE; } catch (_) {}
  if (!['en', 'zh'].includes(language)) language = DEFAULT_LANGUAGE;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.dataset.lang = language;

  const zh = {
    'Company':'公司介绍','News':'新闻动态','Careers':'加入我们','Contact':'联系我们','OUR TECHNOLOGY':'了解核心技术',
    'EXPLORE RM-1':'探索 RIEMANN-1.0','EXPLORE RIEMANN-1.0':'探索 RIEMANN-1.0','TECHNICAL BRIEF':'了解核心技术','MEET RIEMANN DYNAMICS':'了解黎曼动力',
    'Keep up with us':'关注我们','Get news, photos, events, and business updates.':'获取新闻、活动与业务动态。',
    'Technology':'技术','Resources':'资源','Research Inquiries':'研究合作','Careers & HR':'招聘与人力资源','Support':'支持',
    '© Beijing Riemann Dynamics Robotics Technology Co., Ltd.':'© 北京黎曼动力机器人科技有限公司',

    'World models.':'以世界模型，','Real-world intelligence.':'驱动真实世界智能。',
    'Riemann Dynamics brings together world-action models, robotic hardware, and real-world data to build a general-purpose robot brain. From understanding environments to predicting outcomes and generating actions, we enable robots to perform complex tasks across home, eldercare, and healthcare settings.':'黎曼动力融合世界动作模型、机器人本体与真实场景数据，构建通用机器人大脑。从理解环境、预测结果到生成动作，让机器人能够在家居、康养与医疗场景中完成复杂任务。',
    'ORIGIN':'公司定位','COMPANY':'公司介绍','Born from world models.':'源于世界模型。','Built for the physical world.':'面向真实物理世界。','Building a general-purpose robot brain':'为真实世界，','for the real world.':'构建通用机器人大脑。',
    'Incubated by the team behind Matrix-Game, Riemann Dynamics develops embodied intelligence grounded in world models.':'黎曼动力由 Matrix-Game 团队孵化，以世界模型为基础，探索具身智能的通用能力。',
    'Riemann Dynamics develops embodied intelligence grounded in world models. Incubated by the team behind Matrix-Game, we are building Riemann-1.0, our world-action model, to connect world understanding, future prediction, and action generation—enabling robots to perform complex tasks in the real world.':'黎曼动力以世界模型为基础，探索具身智能的通用能力。公司由 Matrix-Game 团队孵化，自研 Riemann-1.0 世界动作模型，贯通世界理解、未来预测与动作生成，让机器人能够在真实环境中完成复杂任务。',
    'We bring models, robotic hardware, and data together in an integrated development loop. Built on over 230,000 hours of high-quality embodied data and our in-house direct-drive dexterous hand, this approach connects tactile sensing, data collection, and model learning. We focus on home, eldercare, and healthcare applications, making our capabilities accessible through Model-as-a-Service (MaaS) and APIs.':'我们坚持模型、本体与数据协同演进的技术路线。依托超过23万小时的高质量具身数据与自研直驱灵巧手，打通触觉感知、数据采集与模型学习的闭环。聚焦家居、康养与医疗场景，通过 MaaS 与 API 对外提供模型能力，推动通用机器人大脑走向实际应用。',
    'FOUNDATION':'技术基础','WORLD-ACTION MODEL':'世界动作模型','OUTCOME':'目标','Real-world intelligence':'真实世界智能',
    'APPROACH':'技术路线','Model. Hardware. Data.':'模型、本体与数据。','One integrated development loop.':'构建一体化研发闭环。',
    'INTEGRATED':'一体化','DEVELOPMENT LOOP':'研发闭环','Models':'模型','Hardware':'机器人本体','Real-world data':'真实场景数据','HOURS OF EMBODIED DATA':'小时具身数据',
    'World-Action Model':'世界动作模型','World understanding, future prediction, and action generation in one model.':'在同一模型中贯通世界理解、未来预测与动作生成。',
    'Robotic Hardware':'机器人本体','An in-house direct-drive dexterous hand connects intelligence with tactile interaction.':'自研直驱灵巧手连接模型智能与触觉交互。',
    'Real-World Data':'真实场景数据','Over 230,000 hours of high-quality embodied data support continuous model learning.':'超过23万小时高质量具身数据，支持模型持续学习。',
    'From understanding the world':'从理解世界','to acting within it.':'到在世界中行动。',
    'Riemann-1.0 connects perception, prediction, and action to enable complex robotic tasks in the real world.':'Riemann-1.0 连接感知、预测与动作，让机器人能够在真实世界中完成复杂任务。',
    'World':'世界','Understanding':'理解','Future':'未来','Prediction':'预测','Action':'动作','Generation':'生成',
    'APPLICATIONS':'应用方向','Built for real-world applications.':'面向真实世界的应用。','Home':'家居','Everyday assistance and complex household tasks.':'日常辅助与复杂家务任务。',
    'Eldercare':'康养','Reliable support for daily care environments.':'为日常照护环境提供可靠支持。','Healthcare':'医疗','Embodied intelligence for healthcare workflows.':'面向医疗工作流程的具身智能。',
    'Accessible through':'能力输出','Model-as-a-Service':'模型即服务','MILESTONES':'里程碑','Founded':'公司成立','Embodied intelligence R&D begins':'启动具身智能研发',
    'First public model release':'首个公开模型发布','World model released':'世界模型发布','Coming late 2026':'预计 2026 年底推出','Scaling toward 1M+ hours of embodied data':'具身数据规模迈向 100 万+小时',

    'Join us.':'和我们一起，','Build the general-purpose robot brain.':'打造机器人的通用大脑。','Join us in building':'和我们一起，','the general-purpose robot brain.':'打造机器人的通用大脑。',
    'Join us in building the general-purpose robot brain.':'和我们一起，打造机器人的通用大脑。',
    'Work across world models, robotic hardware, and real-world data to turn embodied intelligence research into robots that work in everyday environments. Join a small, focused team where you can take ownership of meaningful challenges, iterate closely with teammates, and help shape what comes next.':'从世界模型、机器人本体到真实场景数据，让具身智能研究走进机器人的实际行动。加入一支精干、专注的团队，主导关键问题，与伙伴紧密协作，在持续探索与迭代中，共同定义机器人的下一步。',
    'VIEW OPEN ROLES':'查看在招职位','WHY RIEMANN':'了解黎曼动力','OUR MISSION':'我们的使命','Give robots a body and a mind':'赋予机器人身体与智能，','that work in the real world.':'让它们在真实世界中工作。',
    'Nine open roles, one mission: dexterous-hand engineering, embodied AI products, and world model research.':'九个开放职位，共同推进灵巧手工程、具身智能产品与世界模型研究。',
    'WHY RIEMANN DYNAMICS':'为什么加入黎曼动力','Work across the full embodied intelligence system.':'参与完整的具身智能系统建设。',
    'Work on connected challenges':'参与贯通软硬件的挑战','Explore the connections between world models, dexterous manipulation, and real-world data, with opportunities to collaborate across disciplines.':'围绕世界模型、灵巧操作与真实场景数据开展探索，在跨领域协作中，推动模型能力与机器人实践相互验证。',
    'Take ownership. See the impact.':'承担关键问题，看见工作成果','In a small, focused team, take responsibility for meaningful problems and see how your work contributes to the system as a whole.':'在精干的团队中承担有分量的问题，从方案探索到实验验证，清晰看见自己的工作如何推动整体进展。',
    'Build for the real world':'让研究走进真实场景','Help bring embodied intelligence into home, eldercare, and healthcare settings, where real tasks reveal new questions and guide the next iteration.':'面向家居、康养与医疗场景，让真实任务检验技术能力，也让实际反馈成为下一轮研究与迭代的起点。',
    'OPEN ROLES':'在招职位','Find the challenge':'找到你愿意投入的挑战，','you want to own.':'由你推动解决。','DEXTEROUS HANDS':'灵巧手','Build the hardware and control stack for dexterous manipulation.':'构建灵巧操作所需的硬件与控制系统。',
    '4 OPEN ROLES':'4 个开放职位','PRODUCT':'产品','Turn embodied intelligence into products for real users and environments.':'将具身智能转化为面向真实用户与场景的产品。','1 OPEN ROLE':'1 个开放职位',
    'WORLD MODELS':'世界模型','Advance model research, training infrastructure, data algorithms, and data systems.':'推进模型研究、训练基础设施、数据算法与数据系统。',
    'Responsibilities':'岗位职责','Requirements':'任职要求','Preferred Qualifications':'加分项','Apply for this role →':'申请该职位 →','Don’t see the right fit? Send us your resume anyway.':'暂时没有合适职位？仍欢迎发送简历与我们联系。',

    'The latest from Riemann Dynamics':'黎曼动力最新动态','Explore our latest research, product updates, and company news as we bring embodied intelligence into the real world.':'关注黎曼动力的研究进展、产品更新与公司动态，见证具身智能走向真实世界。',
    'NEWS':'新闻动态','Latest from Riemann Dynamics':'黎曼动力最新动态','Releases · July 17, 2026':'发布 · 2026年7月17日',
    'Riemann-1.0: a world action model for Physical AI, achieving dual-SOTA in simulation and real-world deployment':'Riemann-1.0：面向 Physical AI 的世界动作模型，在仿真与真机部署中实现双 SOTA',

    'Reconstructing the dynamic':'重构具身智能的','limits of embodied intelligence':'动力学边界',
    'World models for robots':'让机器人理解世界，','that act in the real world.':'并在真实世界中行动。','Riemann Dynamics connects world-action models, robotic hardware, and real-world data to build a general-purpose robot brain for complex tasks in everyday environments.':'黎曼动力连接世界动作模型、机器人本体与真实场景数据，构建能够在日常环境中执行复杂任务的通用机器人大脑。',
    'Riemann Dynamics integrates high-dimensional geometric topology algorithms, robot dynamics control, and high-power-density joint systems to build agile, reliable, and scalable robotic platforms for complex industrial environments.':'黎曼动力融合高维几何拓扑算法、机器人动力学控制与高功率密度关节系统，为复杂真实环境构建敏捷、可靠且可扩展的机器人平台。',
    'About Riemann Dynamics':'关于黎曼动力','Brand philosophy, company profile, milestones, core R&D team, credentials,':'品牌理念、公司介绍、发展里程碑、核心研发团队与资质，','partners, and benchmark customers are CMS-driven.':'合作伙伴及标杆客户信息由内容系统维护。',
    'Principle':'理念','Brand philosophy':'品牌理念','Riemann Dynamics treats robot motion as geometry in action: algorithms, actuators, perception, and task planning are designed as one dynamic system.':'黎曼动力将机器人运动视为行动中的几何：算法、执行器、感知与任务规划作为统一动力系统协同设计。',
    'Profile':'公司','Company profile':'公司介绍','The company builds embodied intelligence platforms, high-power-density joints, and developer-facing control stacks for complex industrial environments.':'公司面向复杂真实环境研发具身智能平台、高功率密度关节与开发者控制栈。',
    'Development':'发展','milestones':'里程碑','From joint module prototypes to full-body RM-1 validation, the roadmap focuses on repeatable field deployment and measurable machines.':'从关节模块原型到整机验证，研发路线聚焦可复现的真实场景部署与可量化能力。',
    'Credential pipeline':'资质体系','Patents, qualifications,':'专利、资质','and honors':'与荣誉','Mockup entries cover invention patents, reliability test reports, safety certifications, and industry awards.':'展示内容涵盖发明专利、可靠性测试报告、安全认证与行业奖项。',
    'Control, force feedback, embodied AI,':'控制、力反馈、具身智能','and developer resources':'与开发者资源',
    'The following values describe an RM-1 engineering prototype for website prototype purposes and should be replaced with verified engineering data before public launch.':'以下内容为工程原型展示，正式发布前需以经核实的工程数据替换。',

    'WORLD ACTION MODEL · RIEMANN-1.0':'世界动作模型 · RIEMANN-1.0','World understanding.':'理解世界。','Executable robot action.':'生成可执行的机器人动作。',
    'A fully causal action-video model that learns world dynamics and robot control together—built for complex, long-horizon tasks in the real world.':'一个联合学习世界动力学与机器人控制的全因果动作视频模型，面向真实世界中的复杂长程任务。',
    'Explore the model':'探索模型','View results':'查看结果','Raw source hours':'原始数据小时数','Real-world SR':'真机成功率',
    'Model':'模型','Real-world tasks':'真实任务','Generalization':'泛化能力','Benchmarks':'评测结果','Data & training':'数据与训练','Inference':'推理',
    '01 · THE MODEL':'01 · 模型','One model connects':'一个模型，','world dynamics':'贯通世界动力学','and':'与','robot action.':'机器人动作。',
    'Riemann-1.0 converts heterogeneous embodied experience into a generalist, closed-loop robot policy for precise, long-horizon manipulation.':'Riemann-1.0 将异构具身经验转化为通用闭环机器人策略，支持精确的长程操作。',
    'Fully causal WAM':'全因果世界动作模型','Jointly model actions, multi-view observations, and robot states in the causal order required by real control.':'按照真实控制所需的因果顺序，联合建模动作、多视角观测与机器人状态。',
    'Progressive pretraining':'渐进式预训练','Learn from egocentric video, action–trajectory supervision, and robot-specific policy enhancement.':'依次从第一视角视频、动作轨迹监督与机器人专属策略增强中学习。',
    'Policy + simulator':'策略 + 模拟器','Use one action-video model for executable action prediction and future video generation.':'使用同一动作视频模型预测可执行动作并生成未来视频。',
    'LONG-HORIZON TASKS':'长程任务','From instruction to completion.':'从指令到完成。','Autonomous task execution after lightweight post-training, without complex data-engineering pipelines such as DAGger.':'经过轻量后训练即可自主执行任务，无需 DAGger 等复杂数据工程流程。',
    'Clothes':'衣物折叠','Pull, fold, and stack a deformable garment.':'展开、折叠并整理柔性衣物。','Cube sequence':'积木序列','Stack multiple colors in the requested order.':'按指定顺序堆叠多种颜色的积木。','Kitchen cleanup':'厨房整理','Complete a multi-step clearing, wiping, and organization task.':'完成多步骤收拾、擦拭与整理任务。',
    '02 · REAL-WORLD PERFORMANCE':'02 · 真机表现','Complex tasks.':'复杂任务。','Closed-loop control.':'闭环控制。','Four task families evaluate precise manipulation, bimanual coordination, and multi-step execution in everyday environments.':'四类任务评估日常环境中的精细操作、双臂协同与多步骤执行能力。',
    '▪ Desk':'▪ 桌面整理','Place the stuffed toy, tissue pack, charger, cube, and black tape into the box, then place the pen into the pen holder.':'将玩偶、纸巾、充电器、积木和黑色胶带放入收纳盒，再将笔放入笔筒。',
    '▪ Clothes':'▪ 衣物折叠','Fold this deformable garment on the table through bimanual manipulation.':'使用双臂在桌面上折叠柔性衣物。','▪ Cube stacking':'▪ 积木堆叠','▪ Kitchen':'▪ 厨房整理',
    'Stack the cubes with the right hand in the order of blue, yellow, red, green, and green.':'使用右手按照蓝、黄、红、绿、绿的顺序堆叠积木。',
    'Put the spoon and fork into the basket, and place the plate and bowl on the rack.':'将勺子和叉子放入篮子，并将盘子和碗放到置物架上。',
    'Desk':'桌面整理','Cube stacking':'积木堆叠','Kitchen':'厨房整理',
    'REAL-WORLD TASK':'真实场景任务','Desk organization':'桌面整理','Clothes folding':'衣物折叠','Kitchen organization':'厨房整理',
    'Place everyday objects into the box, then place the pen into the pen holder.':'将日常物品放入收纳盒，再将笔放入笔筒。',
    'Fold a deformable garment on the table through coordinated bimanual manipulation.':'通过双臂协同操作，在桌面上完成柔性衣物折叠。',
    'Stack multiple colored cubes with the right hand in the requested order.':'使用右手按照指定顺序堆叠多种颜色的积木。',
    'Sort utensils into the basket and place the plate and bowl on the rack.':'将餐具分类放入篮子，并将盘子和碗放到置物架上。',
    'REAL-WORLD CAPABILITIES':'真实场景能力','Understand. Adapt. Complete.':'理解指令，应对变化，完成真实任务','Understand. Adapt.':'理解指令，应对变化，','Complete.':'完成真实任务',
    'Three real-world demonstrations show how Riemann-1.0 turns language, changing conditions, and multi-stage goals into executable action.':'三个真机演示展示 Riemann-1.0 如何将语言指令、环境变化与多阶段目标转化为可执行动作。',
    'LANGUAGE-GUIDED REASONING':'语言指令与语义推理','Reason from language. Act in the world.':'理解指令，推理目标',
    'Given an indirect instruction, Riemann-1.0 infers the intended object and completes the pick-and-place task.':'面对未直接指定目标物体的自然语言指令，Riemann-1.0 通过语义推理判断目标，并自主完成抓取与放置。',
    'Open vocabulary':'开放语义','Semantic reasoning':'语义推理','Autonomous manipulation':'自主操作',
    'DISTURBANCE ADAPTATION':'动态干扰与任务恢复','Adapt when the plan is interrupted.':'遇到干扰，调整执行',
    'When the target placement is blocked, Riemann-1.0 adapts its execution and continues toward task completion.':'当目标位置被临时遮挡，Riemann-1.0 调整执行并继续完成任务。',
    'Dynamic disturbance':'动态干扰','Closed-loop control':'闭环控制','Task recovery':'任务恢复',
    'LONG-HORIZON EVERYDAY TASK':'多阶段日常任务','From capsule to coffee.':'从胶囊到咖啡上桌',
    'Riemann-1.0 completes a multi-stage coffee task spanning precise capsule placement, machine operation, dual-arm coordination, and stable serving.':'Riemann-1.0 连续完成胶囊精准投放、咖啡机操作、双臂动作衔接与盛液杯平稳搬运。',
    'Fine manipulation':'精细操作','Dual-arm coordination':'双臂协同','Long-horizon execution':'多阶段执行',
    '03 · GENERALIZATION':'03 · 泛化能力','Beyond trained tasks.':'超越训练任务。','Into unseen situations.':'走向未见场景。','Compositional generalization SR':'组合泛化成功率','OOD zero-shot SR':'分布外零样本成功率','Overall SR':'总体成功率','Compositional Generalization':'组合泛化','OOD zero-shot':'分布外零样本',
    'Held-out evaluations test compositional generalization with new task combinations and OOD zero-shot transfer with unseen objects—without additional demonstrations.':'留出评测通过新的任务组合测试组合泛化，并用未见物体测试分布外零样本迁移，无需额外示范。','Held-out evaluations test':'留出评测用于测试','with new task combinations and':'的新任务组合，以及','with unseen objects—without additional demonstrations.':'在未见物体上的迁移能力，无需额外示范。','compositional generalization':'组合泛化','OOD zero-shot transfer':'分布外零样本迁移',
    'Place both bowls stacked on the plate.':'将两个碗叠放在盘子上。','Place the fork into the pen holder.':'将叉子放入笔筒。','First, place the green cube on the red plate, then place the purple cube in the green bowl, and finally place the red cube on the red plate.':'先将绿色积木放在红色盘子上，再将紫色积木放入绿色碗中，最后将红色积木放在红色盘子上。','Put the red cube on the yellow plate.':'将红色积木放在黄色盘子上。','Put the white napkins into the trash can.':'将白色餐巾放入垃圾桶。','Put the Rubik cube into the basket.':'将魔方放入篮子。','Put the towel into the basin.':'将毛巾放入盆中。','Fold the blue towel and place it on the right side.':'折叠蓝色毛巾并放到右侧。',
    '04 · SIMULATION BENCHMARKS':'04 · 仿真评测','Dual-SOTA performance,':'双 SOTA 表现，','measured across three suites.':'覆盖三套评测基准。',
    'Riemann-1.0 reaches 99.0% average success on LIBERO, 94.3% on RoboTwin2.0, and 62.6% on RoboCasa365.':'Riemann-1.0 在 LIBERO 上达到99.0%的平均成功率，在 RoboTwin2.0 上达到94.3%，在 RoboCasa365 上达到62.6%。','Riemann-1.0 reaches':'Riemann-1.0 在 LIBERO 上达到','average success on LIBERO,':'的平均成功率，在 RoboTwin2.0 上达到','on RoboTwin2.0, and':'，在 RoboCasa365 上达到','on RoboCasa365.':'。',
    '05 · DATA ENGINE':'05 · 数据引擎','232K+ hours':'23.2万+小时','of embodied experience.':'具身经验。','06 · TRAINING':'06 · 训练','Causal by design.':'因果架构。','Progressive by stage.':'分阶段渐进训练。',
    'Hierarchical segmentation, action annotation, quality filtering, 3D hand reconstruction, and scene-skill balancing convert heterogeneous data into action-level supervision. Human video supplies broad interaction priors; UMI, exoskeleton, and robot trajectories ground them in executable control.':'分层切分、动作标注、质量过滤、3D手部重建与场景技能平衡，将异构数据转化为动作级监督。人类视频提供广泛交互先验，UMI、外骨骼与机器人轨迹将这些先验对齐到可执行控制。',
    'A unified autoregressive factorization preserves the order of interaction across visual latents and actions. Structured causal visibility prevents future-observation leakage while retaining teacher-forced training.':'统一的自回归分解保持视觉潜变量与动作之间的交互顺序。结构化因果可见性在保留教师强制训练的同时，避免未来观测信息泄漏。',
    'Stage 1 · LAM-Action Bootstrap':'阶段1 · LAM动作引导','Frozen LAM pseudo actions supervise unlabeled egocentric video while visual dynamics dominate the objective with λ=0.1.':'冻结的LAM伪动作监督无标注第一视角视频，视觉动力学为主要目标，λ=0.1。',
    'Stage 2 · Trajectory-Grounded Alignment':'阶段2 · 轨迹对齐','3D-hand human data, UMI demonstrations, and robot trajectories align real action spaces under balanced learning with λ=0.5.':'3D手部人类数据、UMI示范与机器人轨迹在平衡学习下对齐真实动作空间，λ=0.5。',
    'Stage 3 · Robot-Policy Enhancement':'阶段3 · 机器人策略增强','High-quality robot-only trajectories sharpen state-conditioned executable control with policy-focused supervision at λ=0.9.':'高质量纯机器人轨迹通过策略监督强化状态条件下的可执行控制，λ=0.9。',
    '07 · INFERENCE':'07 · 推理','Observe. Predict. Act.':'观察、预测、行动。','Repeat.':'循环执行。','08 · TWO MODES':'08 · 双模式','One model. Two inference modes.':'一个模型，两种推理模式。',
    'Riemann-1.0 predicts the next action chunk from a growing visual-state cache. Real observations return to context after execution, creating a continuous closed loop.':'Riemann-1.0 从持续增长的视觉状态缓存中预测下一段动作。执行后，真实观测重新进入上下文，形成连续闭环。',
    'Robot Policy':'机器人策略','World Simulator':'世界模拟器','Robot Policy converts observed history into executable actions. World Simulator predicts the visual consequences of an action trajectory for rollout inspection and plan comparison.':'机器人策略将观测历史转化为可执行动作；世界模拟器预测动作轨迹带来的视觉结果，用于滚动检查与方案比较。','converts observed history into executable actions.':'将观测历史转化为可执行动作。','predicts the visual consequences of an action trajectory for rollout inspection and plan comparison.':'预测动作轨迹带来的视觉结果，用于滚动检查与方案比较。','Riemann-1.0 can act as a robot policy to use observations (images + states) and task prompt to denoise the next action chunk.':'Riemann-1.0 可作为机器人策略，利用观测（图像与状态）和任务指令对下一段动作进行去噪。','Given the first frame image, prompt, and input future actions, Riemann-1.0 can act as a world simulator to roll out action-consistent future observations.':'给定首帧图像、任务指令和未来动作输入，Riemann-1.0 可作为世界模拟器，生成与动作一致的未来观测。','Observation':'观测','+ Prompt':'+ 指令','Context':'上下文','+ Action':'+ 动作','Future video':'未来视频'
  };

  const careerTitles = ['灵巧手电子硬件工程师','灵巧手机器人软件工程师','灵巧手电机研发工程师','灵巧手电机驱动与嵌入式系统工程师','具身智能产品经理','世界模型研究科学家 / 研究实习生','AI 基础设施工程师 / 实习生','世界模型数据算法研究科学家','世界模型数据工程师'];
  const careerLiZh = [
    '负责灵巧手电气系统设计，覆盖供电、通信、传感与保护电路。','完成控制板、电源板及电机驱动板的器件选型、PCB设计、调试与验证。','推进关节与手指硬件集成，支持原型验证、供应商协同与产品交付。','相关专业本科及以上学历，3年以上硬件开发经验；项目成果突出者可适当放宽。','具备电路板从设计到系统集成的完整经验，熟练掌握电路设计、PCB布局与EDA工具。','了解电机驱动硬件、传感器接口与通信总线，具备扎实的动手调试能力。','具有灵巧手、机器人关节、紧凑型PCB、触觉传感或EMC与可靠性验证经验。',
    '开发灵巧手控制、设备通信与故障管理中间件及C++/Python SDK。','开发标定、诊断与数据记录工具，以及用于遥操作和仿真的ROS 2接口。','交付经过测试、文档完整的软件包，并支持实体硬件集成。','相关专业本科及以上学历，3年以上机器人软件或设备SDK开发经验；项目成果突出者可适当放宽。','熟练掌握C++、Python和Linux，具有面向硬件的软件与稳健API开发经验。','熟悉ROS 2、并发、通信协议，以及实时系统中的延迟、抖动与同步问题。','具有ros2_control、仿真集成、遥操作或对外SDK交付经验。',
    '面向灵巧手设计微型BLDC/PMSM电机，优化转矩密度、效率与转矩波动。','开展电磁与热仿真，支持样机制作、供应商协同与关节级集成。','建立电机测试体系与参数辨识流程，验证性能并指导设计迭代。','相关专业本科及以上学历，3年以上电机研发经验；项目成果突出者可适当放宽。','具备从电磁设计到样机验证的端到端电机研发经验。','熟练使用Ansys Maxwell、JMAG或Motor-CAD等工具，理解制造工艺、热限制与FOC基础。','具有微型直驱、无框、无铁芯或无槽电机，以及精密电机表征与测试经验。',
    '开发BLDC/PMSM驱动固件及高精度电流、速度、位置和转矩控制环。','为15–25个关节实现实时嵌入式控制，包括通信、同步、诊断与固件升级。','完成电机与控制子系统集成，验证转矩精度、控制带宽、热性能与长期可靠性。','相关专业本科及以上学历，3年以上电机驱动、伺服控制或嵌入式开发经验；项目成果突出者可适当放宽。','熟练掌握C/C++、MCU开发与实时操作系统，具备FOC和伺服控制落地经验。','具备确定性多关节控制、现场总线及软硬件联合调试经验，理解力控与阻抗控制。','具有灵巧手、分布式控制架构、EtherCAT/CAN-FD、转矩标定或摩擦补偿经验。',
    '负责从需求、PRD到开发、量产和交付的产品全生命周期，对质量、成本与商业结果负责。','定义软硬件一体化用户体验，推动模型在实体机器人平台上的部署与验证。','将客户需求转化为产品路线、定价策略与POC，并协调跨职能团队推进商业化。','本科及以上学历，3年以上智能硬件、机器人或具身智能产品经验。','完整负责至少两款硬件产品从研发到量产交付，并取得可量化业务结果。','具备覆盖硬件、软件、用户体验与市场需求的技术、设计与商业判断力。','硕士学历；熟悉VLA、世界模型或强化学习；具有商业机器人规模化或海外产品发布经验。',
    '研究用于机器人感知、预测、规划与闭环控制的多模态世界动作模型。','构建数据集与实验基线，探索交互式长程模型和基于强化学习的策略。','在轮式及人形机器人平台的闭环任务中验证预测与规划能力。','具备扎实的深度学习基础，包括Transformer、扩散模型与强化学习。','熟练掌握PyTorch/Lightning，具备良好的编程、模型训练与实验分析能力。','能够复现研究、设计严谨评测方案，并独立研究世界模型或机器人学习问题。','具有视频建模或机器人研究项目、顶会论文或有影响力的开源贡献。',
    '构建面向世界模型、DiT与多模态生成模型的可扩展训练基础设施。','优化分布式训练、GPU利用率、显存、通信与I/O，并提升检查点和故障恢复能力。','与研究及平台团队协作，交付可靠的训练与推理系统。','相关专业本科及以上学历，系统编程能力扎实，并具备大规模机器学习或分布式系统经验。','熟练掌握Python/C++与PyTorch，具有分布式训练框架、并行策略和性能分析实践。','能够独立负责技术方向；具有推理优化、量化或低精度计算经验。','具有自定义GPU内核、MoE、生成模型优化、集群编排或重要开源基础设施项目经验。',
    '研究多模态数据对世界模型训练的影响，开发质量评估、多样性建模与自动数据选择算法。','探索数据合成与增强技术，提升长程预测、物理一致性与时间连贯性。','构建用于数据驱动模型改进的实验平台与评测基准。','计算机、人工智能、数学、统计、机器人或相关专业硕士及以上学历。','具有多模态建模、视频生成或世界模型研究经历，以及大规模基础模型训练经验。','深入理解数据与模型的相互作用，具备独立研究与跨团队协作能力。','相关领域博士，或具有顶会论文及同等影响力的研究成果。',
    '构建多模态数据采集、清洗、标注、过滤、去重与版本管理流水线。','维护存储与计算基础设施，与研究团队共同定义数据结构、标注标准和评测数据集。','探索合成数据、仿真、自动标注与增强方法，在扩展数据规模的同时提升质量。','计算机、软件工程、数据科学、机器人或相关专业硕士及以上学历。','具备在分布式存储与计算栈上建设大规模多模态数据流水线的经验。','熟悉视频、图像、动作序列、点云和文本处理。','具有机器人、自动驾驶、视频理解或具身智能领域的数据工程经验。'
  ];

  const titles = {
    'index.html':['Riemann Dynamics','黎曼动力｜通用机器人大脑'],
    'company.html':['Company — Riemann Dynamics','公司介绍｜黎曼动力'],
    'careers.html':['Careers — Riemann Dynamics','加入我们｜黎曼动力'],
    'news.html':['News — Riemann Dynamics','新闻动态｜黎曼动力'],
    'news-blogs.html':['Riemann-1.0: A World Action Model for Physical AI','Riemann-1.0：面向 Physical AI 的世界动作模型'],
    'riemann-1.0.html':['Riemann-1.0 | Riemann Dynamics','Riemann-1.0｜黎曼动力']
  };
  const descriptions = {
    'index.html':['Riemann Dynamics builds world-action models for general-purpose robot intelligence.','黎曼动力融合世界动作模型、机器人本体与真实场景数据，构建通用机器人大脑。'],
    'company.html':['Learn how Riemann Dynamics connects world-action models, robotic hardware, and real-world data.','了解黎曼动力如何连接世界动作模型、机器人本体与真实场景数据。'],
    'careers.html':['Join Riemann Dynamics to build world models, robotic hardware, and real-world embodied intelligence systems.','加入黎曼动力，参与世界模型、机器人本体与真实场景具身智能系统研发。'],
    'news.html':['Research, product updates, and company news from Riemann Dynamics.','黎曼动力的研究进展、产品更新与公司动态。'],
    'news-blogs.html':['Riemann-1.0 technical and product release from Riemann Dynamics.','黎曼动力 Riemann-1.0 技术与产品发布。'],
    'riemann-1.0.html':['Riemann-1.0 is a fully causal world-action model for real-world robot control.','Riemann-1.0 是面向真实世界机器人控制的全因果世界动作模型。']
  };

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const translateText = root => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {acceptNode(node) {
      if (!node.parentElement || node.parentElement.closest('script,style')) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }});
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const source = node.nodeValue.trim(); const target = zh[source];
      if (!target) return;
      const lead = node.nodeValue.match(/^\s*/)[0], tail = node.nodeValue.match(/\s*$/)[0];
      node.nodeValue = lead + target + tail;
    });
  };

  const applyStructuredChinese = () => {
    if (page === 'careers.html') {
      document.querySelectorAll('.role-title').forEach((el, i) => { if (careerTitles[i]) el.textContent = careerTitles[i]; });
      document.querySelectorAll('.role-copy li').forEach((el, i) => { if (careerLiZh[i]) el.textContent = careerLiZh[i]; });
    }
    if (page === 'news-blogs.html') {
      const headings = ['面向开放世界迁移的数据基础','一个模型，两种能力','先向人类学习，再向机器人对齐','仿真与真机上的领先表现'];
      document.querySelectorAll('.blog-content h2').forEach((el, i) => { if (headings[i]) el.textContent = headings[i]; });
      const paragraphs = document.querySelectorAll('.blog-content > p');
      const translated = [
        '黎曼动力专注于具身智能与 Physical AI，致力于构建面向真实世界的下一代通用机器人大脑。基于 Matrix-Game 世界模型技术框架，我们构建了融合世界理解、未来预测与动作决策的统一智能框架，使机器人能够持续理解环境、自主规划并执行复杂任务。',
        null,
        '我们期待与研究者、开发者和合作伙伴分享更多 Riemann-1.0 进展，持续迈向通用具身智能。',
        'Riemann-1.0 使用超过23.2万小时、覆盖41种机器人本体形态的具身交互数据进行训练，融合第一视角人类视频、UMI遥操作示范与真实机器人轨迹。自研自动化数据引擎通过VLM标注、3D手部重建与动作质量过滤，将开放世界中的人类经验转化为机器人可学习的数据。',
        '多数系统将策略模型与世界模型分开：前者决定行动，后者预测结果。Riemann-1.0 将两者统一在全因果自回归模型中，同一网络既可作为实时机器人策略，也可作为世界模拟器预测环境变化。结构化因果注意力避免模型提前看到未来信息，这对机器人闭环运行至关重要。',
        '有标注的机器人数据稀缺，而人类视频丰富。Riemann-1.0 采用三阶段渐进训练：先从无标注人类视频学习物理动力学，再利用遥操作和动作捕捉数据与真实机器人控制对齐，最后使用高质量机器人轨迹强化策略能力。',
        'Riemann-1.0 在 RoboTwin2.0 上达到94.3%，在长程 RoboCasa365 基准上达到62.6%，并在 LIBERO 上取得99.0%的表现。在真实双臂机器人上，四类家居任务的平均成功率为85.0%，进度成功率为94.4%。',
      ];
      paragraphs.forEach((el, i) => { if (translated[i]) el.textContent = translated[i]; });
      const end = document.querySelector('.blog-content h3');
      if (end) end.textContent = '这只是开始。Riemann-1.0 是我们迈向通用具身智能的第一步：持续从世界中学习，并将理解转化为真实的物理能力。';
    }
    if (page === 'riemann-1.0.html') {
      const capabilityTitle = document.querySelector('.rm-capability-demos-heading h2');
      if (capabilityTitle) capabilityTitle.innerHTML = '理解指令，应对变化，<strong>完成真实任务</strong>';
      const stageTitles = [
        ['阶段1', 'LAM动作引导'],
        ['阶段2', '轨迹对齐'],
        ['阶段3', '机器人策略增强']
      ];
      document.querySelectorAll('.rm-stage-cards h3').forEach((el, i) => {
        if (!stageTitles[i]) return;
        el.innerHTML = `<span class="stage-index">${stageTitles[i][0]}</span><span class="stage-name">${stageTitles[i][1]}</span>`;
      });
    }
    if (page === 'careers.html') {
      const reasonTitles = document.querySelectorAll('.careers-reasons h3');
      if (reasonTitles[1]) reasonTitles[1].innerHTML = '承担关键问题，<br>看见工作成果';
    }
    // Chinese display headings use a punctuation-free ending. Process each
    // text node separately so a hard line break can remove its own final mark,
    // while punctuation inside a longer sentence remains intact.
    document.querySelectorAll('h1,h2,h3').forEach(title => {
      const walker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => { node.nodeValue = node.nodeValue.replace(/。(?=\s*$)/, ''); });
    });
  };

  window.applyI18n = () => {
    if (language !== 'zh') return;
    translateText(document.body);
    applyStructuredChinese();
    if (titles[page]) document.title = titles[page][1];
  };

  const installMeta = () => {
    if (titles[page] && language === 'en') document.title = titles[page][0];
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    if (descriptions[page]) meta.content = descriptions[page][language === 'zh' ? 1 : 0];
  };
  const installSwitch = () => {
    const nav = document.querySelector('.nav'); if (!nav || nav.querySelector('.lang-switch')) return;
    const markup = `<div class="lang-switch" role="group" aria-label="Language"><button type="button" data-language="zh" aria-pressed="${language === 'zh'}">中文</button><span>/</span><button type="button" data-language="en" aria-pressed="${language === 'en'}">EN</button></div>`;
    const contact = nav.querySelector('.contact');
    if (contact) contact.insertAdjacentHTML('beforebegin', markup); else nav.insertAdjacentHTML('beforeend', markup);
    document.querySelectorAll('.lang-switch button').forEach(button => button.addEventListener('click', () => {
      const next = button.dataset.language; if (next === language) return;
      try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
      location.reload();
    }));
  };
  installMeta();
  installSwitch();
})();

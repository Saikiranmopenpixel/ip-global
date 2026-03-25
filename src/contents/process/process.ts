import processShape1 from '../../assets/images/shapes/process-two-shape-1.png';
import processShape2 from '../../assets/images/shapes/process-two-shape-2.png';
import processIcon1 from '../../assets/images/icon/process-two-icon-1.png';
import processIcon2 from '../../assets/images/icon/process-two-icon-2.png';
import processIcon3 from '../../assets/images/icon/process-two-icon-3.png';
import processIcon4 from '../../assets/images/icon/process-two-icon-4.png';
import type { ProcessItem, ProcessStepThree } from './processType';



export const processData: ProcessItem[] = [
    {
        id: 1,
        title: 'Telecom',
        description:
            'We enable strong connectivity through advanced infrastructure and reliable network solutions.',
        icon: processIcon1,
        shape: processShape1,
        animation: 'fadeInLeft',
    },
    {
        id: 2,
        title: 'Enterprise Organizations',
        description:
            'We help enterprises modernize IT systems and adopt scalable technologies for growth.',
        icon: processIcon2,
        shape: processShape2,
        animation: 'fadeInRight',
    },
    {
        id: 3,
        title: 'Retail',
        description:
            'We deliver smart retail solutions that improve operations and customer experience.',
        icon: processIcon3,
        shape: processShape1,
        animation: 'fadeInLeft',
    },
    {
        id: 4,
        title: 'Banking & Finance',
        description:
            'We provide secure IT systems that protect data and ensure seamless financial services.',
        icon: processIcon4,
        shape: processShape2,
        animation: 'fadeInRight',
    },
];


export const processSteps: ProcessStepThree[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Choose A Service',
        text: 'Choose a Service: Like IT Support & Maintenance',
        delay: 200,
    },
    {
        id: 2,
        icon: 'icon-define',
        title: 'Define Requirements',
        text: 'Define Requirements: Like IT Support & Maintenance',
        delay: 300,
        reverse: true,
    },
    {
        id: 3,
        icon: 'icon-seminar',
        title: 'Request A Meeting',
        text: 'Request A Meeting: Like IT Support & Maintenance',
        delay: 400,
    },
    {
        id: 4,
        icon: 'icon-solution',
        title: 'Final Solution',
        text: 'Final Solution: Like IT Support & Maintenance',
        delay: 500,
        reverse: true,
    },
]

// service tow
import serviceIcon1 from '../../assets/images/icon/services-two-icon-1.png';
import serviceIcon2 from '../../assets/images/icon/services-two-icon-2.png';
import serviceIcon3 from '../../assets/images/icon/services-two-icon-3.png';
import serviceIcon4 from '../../assets/images/icon/services-two-icon-4.png';
import type { ServiceOneItem, ServicesTow } from './type';
import productDesignIcon from '../../assets/images/icon/product-design.png';
import digitalMarketingIcon from '../../assets/images/icon/digital-marketing.png';
import userResearchIcon from '../../assets/images/icon/user-reaserach.png';
import webDesignIcon from '../../assets/images/icon/web-design.png';



export const servicesTow: ServicesTow[] = [
    {
        id: 1,
        icon: serviceIcon1,
        title: 'IT Consulting',
        link: '#',
        description:
            "Strategic IT consulting services that help organizations evaluate, plan, and implement technology solutions aligned with business objectives and long-term growth.",
    },
    {
        id: 2,
        icon: serviceIcon2,
        title: 'Network & Security Integration',
        link: '#',
        description:
            'Design and deployment of secure enterprise networks including advanced security architecture, firewall implementation, and network migration services.',
    },
    {
        id: 3,
        icon: serviceIcon3,
        title: 'Data Center Services',
        link: '#',
        description:
            'Design and deployment of secure enterprise networks including advanced security architecture, firewall implementation, and network migration services.',
    },
    {
        id: 4,
        icon: serviceIcon4,
        title: 'Cloud Infrastructure & Security',
        link: '#',
        description:
            'Design and deployment of secure enterprise networks including advanced security architecture, firewall implementation, and network migration services.',
    },
];


//service three
export const servicesThree: ServicesTow[] = [
    {
        id: 1,
        icon: 'icon-information-technology',
        title: 'Managed IT Services',
        description:
            'Managed IT Services offer a comprehensive, cost-effective solution for businesses...',
        link: '/services',
    },
    {
        id: 2,
        icon: 'icon-software-development',
        title: 'Software Development',
        description:
            'We deliver powerful, scalable, and user-focused applications built for performance.',
        link: '/services',
    },
    {
        id: 3,
        icon: 'icon-cybersecurity',
        title: 'Cybersecurity Services',
        description:
            'Protect your business from digital threats with robust cybersecurity frameworks.',
        link: '/services',
    },
    {
        id: 4,
        icon: 'icon-data-security',
        title: 'Incident Responder',
        description:
            'Swift and efficient incident response to minimize damage and recovery time.',
        link: '/services',
    },
    {
        id: 5,
        icon: 'icon-encrypted',
        title: 'Data Encryption',
        description:
            'Advanced encryption techniques to secure sensitive data and maintain compliance.',
        link: '/services',
    },
    {
        id: 6,
        icon: 'icon-planning',
        title: 'Disaster Planning',
        description:
            'Ensure business continuity with disaster recovery and proactive planning.',
        link: '/services',
    },
    {
        id: 7,
        icon: 'icon-cyber-threat',
        title: 'Threat Hunter',
        description:
            'Identify and neutralize emerging threats before they impact operations.',
        link: '/services',
    },
    {
        id: 8,
        icon: 'icon-data-recovery',
        title: 'Data Recovery',
        description:
            'Recover lost or corrupted data efficiently with our expert recovery solutions.',
        link: '/services',
    },
];




export const servicesOneData: ServiceOneItem[] = [
    {
        id: 1,
        icon: productDesignIcon,
        title: 'Product Design & Branding',
        link: '/digital-marketing',
    },
    {
        id: 2,
        icon: digitalMarketingIcon,
        title: 'Digital Marketing & ADS Camping',
        link: '/digital-marketing',
    },
    {
        id: 3,
        icon: userResearchIcon,
        title: 'Ui/UX Design & User Research',
        link: '/web-design-development',
    },
    {
        id: 4,
        icon: webDesignIcon,
        title: 'Website Design & Development',
        link: '/web-design-development',
    }
];

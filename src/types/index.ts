import { useTranslations } from '@/i18n/utils';
import { getLangFromUrl } from '@/i18n/utils';
import { ui } from '@/i18n/ui';

export type Experience = {
    title: string;
    company: string;
    date: string;
    description: string;
    link: string;
}

export type ProjectType = {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
}

export type TagType = {
    name: string;
    class: string;
    icon: (_props: Record<string, any>) => any;
};
  
export type TagsType = {
    [key: string]: TagType;
};

export type Props = {
	title?: string;
	body?: string;
	href?: string;
    company?: string
    description?: string
    date?: string
}
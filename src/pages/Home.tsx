import { purple as themeColor, } from '@ant-design/colors';
import { BulbOutlined, RocketOutlined, SafetyOutlined, TeamOutlined, } from '@ant-design/icons';
import { Button, Col, Image, Layout, Row, Tag, Typography, } from 'antd';
import type { ReactNode, } from 'react';
import { useTranslation, } from 'react-i18next';
import { ScrollRestoration, useNavigate, } from 'react-router-dom';
import { useMediaQuery, } from 'usehooks-ts';

import { Footer, Header, } from '../components';
import { SECTION_WIDTH, PAGE_WIDTH, } from '../constants';

const ICONS = [
    <RocketOutlined
        key={0}
        style={{
            fontSize : '3rem',
            color    : themeColor[5],
        }} />,
    <BulbOutlined
        key={1}
        style={{
            fontSize : '3rem',
            color    : themeColor[5],
        }} />,
    <SafetyOutlined
        key={2}
        style={{
            fontSize : '3rem',
            color    : themeColor[5],
        }} />,
    <TeamOutlined
        key={3}
        style={{
            fontSize : '3rem',
            color    : themeColor[5],
        }} />,
];

const COVERS = [
    'alan-j-hendry-KNt4zd8HPb0-unsplash.jpg',
    'bao-menglong-R-Ghenm9OX8-unsplash.jpg',
    'christin-hume-Hcfwew744z4-unsplash.jpg',
];

const Heading = ({
    color,
    children,
} : {
    color    : string,
    children : ReactNode,
}) => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');

    return (
        <Typography.Title
            style={{
                color,
                marginLeft  : isDesktop ? 0 : 8,
                marginRight : isDesktop ? 0 : 8,
                fontWeight  : 600,
                textAlign   : 'center',
            }}
            level={2}>
            {children}
        </Typography.Title>
    );
};

const Subtitle = ({
    children,
} : {
    children : ReactNode,
}) => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');

    return (
        <Typography.Text style={{
            marginLeft  : isDesktop ? 0 : 8,
            marginRight : isDesktop ? 0 : 8,
            textAlign   : 'center',
            fontSize    : isDesktop ? '1.2rem' : '1.1rem',
            color       : 'rgba(255, 255, 255, 0.75)',
        }}>
            {children}
        </Typography.Text>
    );
};

const Divider = ({
    color,
} : {
    color : string,
}) => (
    <hr style={{
        height          : '0.2rem',
        width           : '3.25rem',
        margin          : '1.5rem auto',
        border          : 0,
        borderTop       : '1px solid',
        color           : 'inherit',
        backgroundColor : color,
        opacity         : 1,
    }} />
);

const ImageMask = ({
    comingSoon,
    index,
} : {
    comingSoon? : boolean,
    index       : number,
}) => {
    const { t, } = useTranslation();

    return (
        <div style={{
            display        : 'flex',
            flexDirection  : 'column',
            alignItems     : 'center',
            justifyContent : 'center',
        }}>
            {comingSoon && <Tag color={themeColor[5]}>{t('tags.coming_soon')}</Tag>}
            <Typography.Title
                style={{
                    marginTop    : 8,
                    paddingLeft  : 32,
                    paddingRight : 32,
                    textAlign    : 'center',
                    color        : '#fff',
                }}
                level={3}>
                {t(`sections.products.${index}.caption`) }
            </Typography.Title>
            <Typography.Text
                style={{
                    paddingLeft  : 32,
                    paddingRight : 32,
                    fontSize     : '1.1rem',
                    textAlign    : 'center',
                    color        : '#fff',
                }}>
                {t(`sections.products.${index}.description`)}
            </Typography.Text>
        </div>
    );
};

export const HomePage = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');

    const navigate = useNavigate();

    const handleAboutClick = () => document.getElementById('about')!.scrollIntoView({
        behavior : 'smooth',
    });

    const handleSolutionsClick = () => document.getElementById('solutions')!.scrollIntoView({
        behavior : 'smooth',
    });

    const { t, } = useTranslation();

    return (
        <Layout>
            <Header isHome />
            <Layout.Content>
                <ScrollRestoration />
                <section
                    id='home'
                    style={{
                        height               : '100vh',
                        minHeight            : '40rem',
                        paddingTop           : '4.5rem',
                        display              : 'flex',
                        flexDirection        : 'column',
                        alignItems           : 'center',
                        justifyContent       : 'center',
                        background           : 'linear-gradient(to bottom, rgba(114, 47, 209, 0.15) 0%, rgba(114, 47, 209, 0.8) 100%), url("wesley-tingey-lwlPNk6D1co-unsplash.jpg")',
                        backgroundSize       : 'cover',
                        backgroundPosition   : 'center',
                        backgroundRepeat     : 'no-repeat',
                        backgroundAttachment : 'scroll',
                    }}>
                    <div style={{
                        width          : isDesktop ? SECTION_WIDTH : '100%',
                        height         : '100%',
                        marginTop      : '-10rem',
                        display        : 'flex',
                        flexDirection  : 'column',
                        alignItems     : 'center',
                        justifyContent : 'center',
                    }}>
                        <Typography.Title style={{
                            marginTop   : isDesktop ? 0 : '10rem',
                            marginLeft  : isDesktop ? 0 : 8,
                            marginRight : isDesktop ? 0 : 8,
                            textAlign   : 'center',
                            fontSize    : isDesktop ? '3.5rem' : '3rem',
                            color       : '#ffffff',
                        }}>
                            {t('sections.home.title')}
                        </Typography.Title>
                        <Divider color={themeColor[5]} />
                        <Subtitle>{t('sections.home.subtitle')}</Subtitle>
                        <Button
                            style={{
                                margin     : 48,
                                padding    : 32,
                                fontSize   : '1.25rem',
                                fontWeight : 600,
                            }}
                            size='large'
                            type='primary'
                            shape='round'
                            onClick={handleAboutClick}>
                            {t('actions.find_out_more')}
                        </Button>
                    </div>
                </section>
                <section
                    id='about'
                    style={{
                        display         : 'flex',
                        flexDirection   : 'column',
                        alignItems      : 'center',
                        justifyContent  : 'center',
                        backgroundColor : themeColor[5],
                    }}>
                    <div style={{
                        width          : isDesktop ? SECTION_WIDTH : '100%',
                        height         : '100%',
                        paddingTop     : '8rem',
                        paddingBottom  : '8rem',
                        display        : 'flex',
                        flexDirection  : 'column',
                        alignItems     : 'center',
                        justifyContent : 'center',
                    }}>
                        <Heading color='#fff'>{t('sections.about.title')}</Heading>
                        <Divider color='#fff' />
                        <Subtitle>{t('sections.about.subtitle')}</Subtitle>
                        <Button
                            style={{
                                margin     : 48,
                                padding    : 32,
                                fontSize   : '1.25rem',
                                fontWeight : 600,
                            }}
                            size='large'
                            shape='round'
                            onClick={handleSolutionsClick}>
                            Get Started
                        </Button>
                    </div>
                </section>
                <section
                    id='solutions'
                    style={{
                        display         : 'flex',
                        flexDirection   : 'column',
                        alignItems      : 'center',
                        justifyContent  : 'center',
                    }}>
                    <div style={{
                        width          : isDesktop ? PAGE_WIDTH : '100%',
                        height         : '100%',
                        paddingTop     : '8rem',
                        paddingBottom  : '8rem',
                        display        : 'flex',
                        flexDirection  : 'column',
                        alignItems     : 'center',
                        justifyContent : 'center',
                    }}>
                        <Heading color='#000'>{t('sections.solutions.title')}</Heading>
                        <Divider color={themeColor[5]} />
                        <Row style={{
                            marginTop : 24,
                        }}>
                            {[ ...Array(4).keys(), ].map(index => (
                                <Col
                                    style={{
                                        marginBottom : isDesktop ? 0 : 48,
                                    }}
                                    key={index}
                                    span={isDesktop ? 6 : 24}>
                                    <div style={{
                                        marginLeft     : isDesktop ? 0 : 8,
                                        marginRight    : isDesktop ? 0 : 8,
                                        display        : 'flex',
                                        flexDirection  : 'column',
                                        alignItems     : 'center',
                                        justifyContent : 'center',
                                    }}>
                                        {ICONS[index]}
                                        <Typography.Title
                                            style={{
                                                textAlign : 'center',
                                                color     : '#000',
                                            }}
                                            level={3}>
                                            {t(`sections.solutions.${index}.caption`)}
                                        </Typography.Title>
                                        <Typography.Text style={{
                                            fontSize  : '1rem',
                                            textAlign : 'center',
                                            color     : 'rgba(0, 0, 0, 0.75)',
                                        }}>
                                            {t(`sections.solutions.${index}.description`)}
                                        </Typography.Text>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                <section style={{
                    display        : 'flex',
                    flexDirection  : 'column',
                    alignItems     : 'center',
                    justifyContent : 'center',
                }}>
                    <div style={{
                        width        : '100%',
                        maxWidth     : isDesktop ? PAGE_WIDTH * 2 : '100%',
                        marginBottom : 150,
                    }}>
                        <Row>
                            {[ ...Array(3).keys(), ].map(index => {
                                const handleClick = () => {
                                    switch (index) {
                                        case 0:
                                            navigate('/products/securezone');
                                            break;

                                        case 2:
                                            window.open('https://macbrewer.geekylifehacks.com', '_blank');
                                            break;

                                        default:
                                            break;
                                    }
                                };

                                return (
                                    <Col
                                        key={index}
                                        span={isDesktop ? 8 : 24}>
                                        <Image
                                            style={{
                                                position : isDesktop ? undefined : 'relative',
                                                maxWidth : '100%',
                                                height   : 'auto',
                                            }}
                                            src={COVERS[index]}
                                            alt={t('sections.products.0.caption')}
                                            onClick={handleClick}
                                            preview={{
                                                visible : false,
                                                mask    : (
                                                    <ImageMask
                                                        comingSoon={index === 1}
                                                        index={index} />
                                                ),
                                            }} />
                                        {!isDesktop && (
                                            <div style={{
                                                width           : '100%',
                                                padding         : 16,
                                                marginBottom    : 48,
                                                backgroundColor : '#000',
                                            }}>
                                                <ImageMask
                                                    comingSoon={index !== 2}
                                                    index={index} />
                                            </div>
                                        )}
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </section>
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

import { CheckOutlined, CloseOutlined, } from '@ant-design/icons';
import { Button, Col, Layout, Row, Typography, } from 'antd';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead, } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useTranslation, } from 'react-i18next';
import { ScrollRestoration, } from 'react-router-dom';
import { useMediaQuery, } from 'usehooks-ts';

import { Footer, Header, InfoText, } from '../components';
import { PAGE_WIDTH, SECTION_WIDTH, } from '../constants';

export const SecureZone = () => {
    const isDesktop = useMediaQuery('(min-width: 1000px)');

    const { t, } = useTranslation();

    const handleDownload = () => window.open('https://geekylifehacks.gitbook.io/securezone/', '_blank');

    return (
        <Layout>
            <Header />
            <Layout.Content>
                <ScrollRestoration />
                <section style={{
                    height               : '100vh',
                    minHeight            : '40rem',
                    paddingTop           : '4.5rem',
                    display              : 'flex',
                    flexDirection        : 'column',
                    alignItems           : 'center',
                    justifyContent       : 'center',
                    background           : 'linear-gradient(to bottom, rgba(44, 54, 22, 0.15) 0%, rgba(44, 54, 22, 0.8) 100%), url("../margo-brodowicz-nzAZxPyhZ2g-unsplash.jpg")',
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
                            {t('sections.products.0.title')}
                        </Typography.Title>
                        <Typography.Text style={{
                            marginLeft  : isDesktop ? 0 : 8,
                            marginRight : isDesktop ? 0 : 8,
                            textAlign   : 'center',
                            fontSize    : isDesktop ? '1.2rem' : '1.1rem',
                            color       : 'rgba(255, 255, 255, 0.75)',
                        }}>
                            {t('sections.products.0.subtitle')}
                        </Typography.Text>
                        <Button
                            style={{
                                margin     : 48,
                                padding    : 32,
                                fontSize   : '1.25rem',
                                fontWeight : 600,
                                backgroundColor : 'rgb(44, 54, 22)',
                            }}
                            size='large'
                            type='primary'
                            shape='round'
                            onClick={handleDownload}>
                            {t('actions.download')}
                        </Button>
                    </div>
                </section>
                <section style={{
                    display        : 'flex',
                    flexDirection  : 'column',
                    alignItems     : 'center',
                    justifyContent : 'center',
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
                        <Row style={{
                            marginTop    : 24,
                            marginBottom : 96,
                        }}>
                            <Col span={12}>
                                <div style={{
                                    width              : 450,
                                    height             : 450,
                                    backgroundImage    : 'url("../matt-jones-xpDHTc-pkog-unsplash.jpg")',
                                    backgroundSize     : 'cover',
                                    backgroundPosition : 'center',
                                }} />
                            </Col>
                            <Col
                                style={{
                                    padding        : 16,
                                    display        : 'flex',
                                    flexDirection  : 'column',
                                    justifyContent : 'center',
                                }}
                                span={12}>
                                <Typography.Title level={2}>
                                    {t('sections.products.0.tagline.0')}
                                </Typography.Title>
                                <Typography.Text style={{
                                    fontSize : '1.1rem',
                                }}>
                                    {t('sections.products.0.summary.0')}
                                </Typography.Text>
                            </Col>
                        </Row>
                        <Row style={{
                            marginTop    : 24,
                            marginBottom : 96,
                        }}>
                            <Col
                                style={{
                                    padding        : 16,
                                    display        : 'flex',
                                    flexDirection  : 'column',
                                    justifyContent : 'center',
                                }}
                                span={12}>
                                <Typography.Title level={2}>
                                    {t('sections.products.0.tagline.1')}
                                </Typography.Title>
                                <Typography.Text style={{
                                    fontSize : '1.1rem',
                                }}>
                                    {t('sections.products.0.summary.1')}
                                </Typography.Text>
                            </Col>
                            <Col span={12}>
                                <div style={{
                                    width              : 450,
                                    height             : 450,
                                    marginLeft         : 'auto',
                                    marginRight        : 0,
                                    backgroundImage    : 'url("../kutan-ural-MZPwImQUDM0-unsplash.jpg")',
                                    backgroundSize     : 'cover',
                                    backgroundPosition : 'center',
                                }} />
                            </Col>
                        </Row>
                        <Row style={{
                            marginTop    : 24,
                            marginBottom : 96,
                        }}>
                            <Col span={12}>
                                <div style={{
                                    width              : 450,
                                    height             : 450,
                                    backgroundImage    : 'url("../possessed-photography-zbLW0FG8XU8-unsplash.jpg")',
                                    backgroundSize     : 'cover',
                                    backgroundPosition : 'center',
                                }} />
                            </Col>
                            <Col
                                style={{
                                    padding        : 16,
                                    display        : 'flex',
                                    flexDirection  : 'column',
                                    justifyContent : 'center',
                                }}
                                span={12}>
                                <Typography.Title level={2}>
                                    {t('sections.products.0.tagline.2')}
                                </Typography.Title>
                                <Typography.Text style={{
                                    fontSize : '1.1rem',
                                }}>
                                    {t('sections.products.0.summary.2')}
                                </Typography.Text>
                            </Col>
                        </Row>
                    </div>
                </section>
                <div style={{
                    margin         : 32,
                    display        : 'flex',
                    flexDirection  : 'column',
                    alignItems     : 'center',
                    justifyContent : 'center',
                }}>
                    <Typography.Title
                        style={{
                            margin     : 32,
                            fontWeight : 'bold',
                        }}
                        level={1}>
                        {t('label.upgrade.title')}
                    </Typography.Title>
                    <MDBContainer className='py-5 text-center'>
                        <MDBTable
                            responsive
                            striped
                            className='text-successtable-border border-light'>
                            <MDBTableHead className='border-light'>
                                <tr>
                                    <th scope='col' />
                                    {(t('label.upgrade.plans', {
                                        returnObjects : true,
                                    }) as string[]).map(plan => (
                                        <th
                                            key={plan }
                                            scope='col'>
                                            <Typography.Title
                                                style={{
                                                    fontWeight : 'bold',
                                                }}
                                                level={4}>
                                                {plan}
                                            </Typography.Title>
                                        </th>
                                    ))}
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <th />
                                    <td style={{
                                        whiteSpace : 'pre-wrap',
                                    }}>
                                        {t('label.upgrade.plans.0.description')}
                                    </td>
                                    <td style={{
                                        whiteSpace : 'pre-wrap',
                                    }}>
                                        {t('label.upgrade.plans.1.description')}
                                    </td>
                                    <td style={{
                                        whiteSpace : 'pre-wrap',
                                    }}>
                                        {t('label.upgrade.plans.2.description')}
                                    </td>
                                </tr>
                                <tr>
                                    <th style={{
                                        textAlign : 'end',
                                    }}>
                                        {t('label.upgrade.plans.price')}
                                    </th>
                                    <td style={{
                                        fontSize   : '2rem',
                                        fontWeight : 'bold',
                                    }}>
                                        {t('label.upgrade.plans.0.price')}
                                    </td>
                                    <td style={{
                                        fontSize   : '2rem',
                                        fontWeight : 'bold',
                                    }}>
                                        {t('label.upgrade.plans.1.price')}
                                    </td>
                                    <td style={{
                                        fontSize   : '2rem',
                                        fontWeight : 'bold',
                                    }}>
                                        {t('label.upgrade.plans.2.price')}
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style={{
                                            textAlign : 'end',
                                        }}
                                        scope='row'>
                                        <InfoText title='Maximum number of running monitors'>{t('label.upgrade.running_monitors')}</InfoText>
                                    </th>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <th
                                        style={{
                                            textAlign : 'end',
                                        }}
                                        scope='row'>
                                        <Typography.Text>{t('label.upgrade.intrusion_trigger')}</Typography.Text>
                                    </th>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style={{
                                            textAlign : 'end',
                                        }}
                                        scope='row'>
                                        <Typography.Text>{t('label.upgrade.synology_integration')}</Typography.Text>
                                    </th>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style={{
                                            textAlign : 'end',
                                        }}
                                        scope='row'>
                                        <InfoText title={t('label.upgrade.snapshot_capture_tooltip')}>{t('label.upgrade.snapshot_capture')}</InfoText>
                                    </th>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style={{
                                            textAlign : 'end',
                                        }}
                                        scope='row'>
                                        <InfoText title={t('label.upgrade.video_capture_tooltip')}>{t('label.upgrade.video_capture')}</InfoText>
                                    </th>
                                    <td>
                                        <CloseOutlined style={{
                                            color : 'red',
                                        }} />
                                    </td>
                                    <td>{t('label.upgrade.video_capture_option_1')}</td>
                                    <td style={{
                                        whiteSpace : 'pre-wrap',
                                    }}>
                                        {t('label.upgrade.video_capture_option_2')}
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style={ {
                                            textAlign : 'end',
                                        } }
                                        scope='row'>
                                        <InfoText
                                            title={ t('label.upgrade.rich_notifications_tooltip') }>{ t('label.upgrade.rich_notifications') }</InfoText>
                                    </th>
                                    <td>
                                        <CloseOutlined style={{
                                            color : 'red',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                    <td>
                                        <CheckOutlined style={{
                                            color : 'green',
                                        }} />
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        style={{
                                            textAlign : 'end',
                                        }}
                                        scope='row'>
                                        <Typography.Text>{t('label.upgrade.customer_support')}</Typography.Text>
                                    </th>
                                    {(t('label.upgrade.customer_support_options', {
                                        returnObjects : true,
                                    }) as string[]).map((option, index) => (
                                        <td
                                            key={index}>
                                            { option }
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <Button
                                            size='large'
                                            type='primary'
                                            onClick={handleDownload}>
                                            {t('actions.download')}
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            size='large'
                                            type='primary'
                                            onClick={handleDownload}>
                                            {t('actions.download')}
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            size='large'
                                            type='primary'
                                            onClick={handleDownload}>
                                            {t('actions.download')}
                                        </Button>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBContainer>
                </div>
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

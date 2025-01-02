import { Button, Layout, Space, Typography, } from 'antd';
import type { ReactNode, } from 'react';
import { useNavigate, } from 'react-router';
import { useTranslation, } from 'react-i18next';
import { useMediaQuery, } from 'usehooks-ts';

const Link = ({
    page,
    children,
} : {
    page     : string,
    children : ReactNode,
}) => {
    const navigate = useNavigate();

    const handleNavigate = (id : string) => navigate(`/agreements/${id}`);

    const handleClick = () => handleNavigate(page);

    return (
        <Button
            style={{
                color : '#fff',
            }}
            size='small'
            type='text'
            onClick={handleClick}>
            {children}
        </Button>
    );
};

export const Footer = () => {
    const { t, } = useTranslation();

    const isDesktop = useMediaQuery('(min-width: 1000px)');

    return (
        <Layout.Footer style={{
            padding   : 0,
            textAlign : 'center',
        }}>
            <section style={{
                paddingTop      : '2rem',
                paddingBottom   : 100,
                display         : 'flex',
                alignItems      : 'center',
                justifyContent  : 'center',
                backgroundColor : '#000',
            }}>
                <Space
                    style={{
                        flexDirection : isDesktop ? 'row' : 'column',
                    }}
                    size='large'>
                    <Typography.Text style={{
                        fontSize : '0.9rem',
                        color    : '#fff',
                    }}>
                        {t('footer.copyright', {
                            year    : new Date().getFullYear(),
                            appName : t('app.name'),
                        })}
                    </Typography.Text>
                    <Link page='terms-and-conditions'>{t('footer.terms_and_conditions')}</Link>
                    <Link page='privacy-policy'>{t('footer.privacy_policy')}</Link>
                    <Link page='acceptable-use-policy'>{t('footer.acceptable_use_policy')}</Link>
                    <Link page='disclaimer'>{t('footer.disclaimer')}</Link>
                    <Link page='return-policy'>{t('footer.return_policy')}</Link>
                </Space>
            </section>
        </Layout.Footer>
    );
};

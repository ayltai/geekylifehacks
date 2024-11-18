import { Anchor, Button, Layout, Typography, } from 'antd';
import { type MouseEvent, type ReactNode, useEffect, useState, } from 'react';
import { useNavigate, } from 'react-router';
import { useTranslation, } from 'react-i18next';
import { useMediaQuery, } from 'usehooks-ts';

import { PAGE_WIDTH, } from '../constants';

export const Header = ({
    isHome,
} : {
    isHome? : boolean,
}) => {
    const [ isTop, setIsTop, ] = useState(window.scrollY === 0);

    const navigate = useNavigate();

    const isDesktop = useMediaQuery('(min-width: 1000px)');

    const { t, } = useTranslation();

    const handleScroll = () => setIsTop(window.scrollY === 0);

    const handleClick = () => navigate('/');

    const handleHashLinkClick = (e : MouseEvent<HTMLElement>, link : {
        title : ReactNode,
        href  : string,
    }) => {
        e.preventDefault();

        document.getElementById(link.href)!.scrollIntoView({
            behavior : 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Layout.Header style={{
            width           : '100%',
            top             : 0,
            paddingLeft     : isDesktop ? undefined : 8,
            paddingRight    : isDesktop ? undefined : 8,
            position        : 'fixed',
            display         : 'flex',
            alignItems      : 'center',
            justifyContent  : 'center',
            zIndex          : 1,
            boxShadow       : isTop ? 'none' : '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
            backgroundColor : isTop ? 'transparent' : '#fff',
            transition      : 'background-color 0.5s ease',
        }}>
            <div style={{
                width      : isDesktop ? PAGE_WIDTH : '100%',
                display    : 'flex',
                alignItems : 'center',
            }}>
                <Button
                    size={isDesktop ? 'large' : 'small'}
                    type='text'
                    onClick={handleClick}>
                    <Typography.Title
                        style={{
                            margin : 0,
                            color  : isHome && isTop ? '#fff' : '#000',
                        }}
                        level={isDesktop ? 4 : 5}>
                        {t('app.name')}
                    </Typography.Title>
                </Button>
                <div style={{
                    flexGrow : 1,
                }} />
                {isHome && (
                    <Anchor
                        direction='horizontal'
                        items={[
                            'home',
                            'about',
                            'solutions',
                        ].map(key => ({
                            key,
                            href  : `${key}`,
                            title : (
                                <Typography.Link style={{
                                    fontSize : '1rem',
                                    color    : isTop ? '#fff' : '#000',
                                }}>
                                    {t(`menu.${key}`)}
                                </Typography.Link>
                            ),
                        }))}
                        onClick={handleHashLinkClick} />
                )}
            </div>
        </Layout.Header>
    );
};

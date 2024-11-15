import { documentToHtmlString, } from '@contentful/rich-text-html-renderer';
import { Layout, Typography, } from 'antd';
import { createClient, } from 'contentful';
import { useEffect, useState, } from 'react';
import { ScrollRestoration, useParams, } from 'react-router-dom';
import { useMediaQuery, } from 'usehooks-ts';

import { Footer, Header, } from '../components';
import { SECTION_WIDTH, } from '../constants';
import type { Agreement, } from '../models';

const ENTRY_IDS : Record<string, string> = {
    'terms-and-conditions'  : '4wJZc1k69tVHxFQvX6XyFc',
    'privacy-policy'        : '38NBL7viyviqOrj48LlK9V',
    'acceptable-use-policy' : '2vLTpPu4CMeTEAa8vh0noz',
    'disclaimer'            : '1CUSJyJMCWc3wOPXspT0sp',
    'return-policy'         : '5eoUIoErGfv2XIIOHWyeNY',
};

export const AgreementPage = () => {
    const [ title,       setTitle,       ] = useState<string | undefined>();
    const [ lastUpdated, setLastUpdated, ] = useState<string | undefined>();
    const [ agreement,   setAgreement,   ] = useState<string | undefined>();

    const { page, } = useParams();

    const isDesktop = useMediaQuery('(min-width: 1000px)');

    const client = createClient({
        space       : import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID,
        accessToken : import.meta.env.VITE_APP_CONTENTFUL_API_KEY,
    });

    useEffect(() => {
        if (client && page) client.getEntry<Agreement>(ENTRY_IDS[page])
            .then((entry) => {
                setTitle(entry.fields.title);
                setLastUpdated(entry.fields.lastUpdated);
                setAgreement(documentToHtmlString(entry.fields.content));
            })
            .catch(console.error);
    }, [ client, page, ]);

    return (
        <Layout>
            <Header />
            <Layout.Content>
                <ScrollRestoration />
                <section style={{
                    display        : 'flex',
                    flexDirection  : 'column',
                    alignItems     : 'center',
                    justifyContent : 'center',
                }}>
                    <div
                        style={{
                            width         : isDesktop ? SECTION_WIDTH : '100%',
                            paddingLeft   : isDesktop ? 0 : 8,
                            paddingRight  : isDesktop ? 0 : 8,
                            paddingTop    : 48,
                            paddingBottom : 48,
                            display       : 'flex',
                            flexDirection : 'column',
                        }}>
                        {title ? (
                            <Typography.Title
                                style={{
                                    fontWeight : 'bold',
                                }}
                                level={1}>
                                {title}
                            </Typography.Title>
                        ) : null}
                        {lastUpdated ? (
                            <Typography.Text style={{
                                fontWeight : 600,
                            }}>
                                Last updated: {lastUpdated}
                            </Typography.Text>
                        ) : null}
                        <div
                            style={{
                                marginTop    : 24,
                                marginBottom : 24,
                            }}
                            dangerouslySetInnerHTML={{
                                __html : agreement ?? '',
                            }} />
                    </div>
                </section>
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

import { getDictionary } from '../dictionaries/getDictionary';
import Portfolio from '../../components/Portfolio';

export function generateStaticParams() {
    return [{ lang: 'ko' }, { lang: 'en' }, { lang: 'ja' }];
}

export default async function Page({ params }) {
    // Await params in case it's a promise (Next.js future proofing)
    const resolvedParams = await params;
    const dict = getDictionary(resolvedParams.lang);

    return <Portfolio dict={dict} />;
}

import WelcomeCard from '@/components/Common/WelcomeCard';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <WelcomeCard subTitle='Check your email'>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Image src='/images/email-sent.png' alt='email' height={100} width={100} />
          </div>
          <p style={{ textAlign: 'center', color: 'white', marginTop: '25px' }}>
            Check your email to verify your email address and access your account.
          </p>
        </div>
      </WelcomeCard>
    </>
  );
}

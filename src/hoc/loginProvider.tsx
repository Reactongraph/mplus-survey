'use client';

const loginProvider = (Component: React.FC) => {
  const EnhancedComponent = (props: any) => {
    const login = (email: string) => {
      // call login api here
      //   console.log(email);
    };

    return <Component login={login} {...props} />;
  };

  return EnhancedComponent;
};

export default loginProvider;

'use client';

import { useRouter } from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();

  const goTo = (path) => {
    router.replace(path);
  };

  const goBack = () => {
    router.back();
  };

  // const refreshPage = () => {
  //   router.refresh();
  // };

  return { goTo, goBack };
};

export default useNavigation; 

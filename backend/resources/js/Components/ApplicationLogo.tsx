import { createPath } from '@/utils/createPath';
import { LogoBlock } from '@/Wrapper/LogoBlock';
import { SVGAttributes } from 'react';

// ApplicationLogo component with dynamic logo path
export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
  return (
    <LogoBlock
      srcFile={createPath('img/logoT.svg')}
      alt="logo image"
      classnames="w-9 h-9 mx-auto rounded-full lg:w-12 lg:h-12"
      {...props}
    />
  );
}

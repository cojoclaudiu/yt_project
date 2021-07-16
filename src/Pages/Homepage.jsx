import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { Header, Sidebar, Categories, HomeFeed } from 'components';
import { SidebarProvider } from 'context/SidebarContext';
import { HomeVideosProvider } from 'context/HomeVideosContext';

function Homepage() {
  const width = useWindowSize();

  return (
    <>
      <HomeVideosProvider>
        <SidebarProvider>
          <Header />
          {width > 550 && <Sidebar />}
        </SidebarProvider>
        <Categories />
        <HomeFeed />
      </HomeVideosProvider>
    </>
  );
}

export default Homepage;

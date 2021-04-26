import { useRouter } from 'next/router';
import Link from 'next/link'
import React from 'react';

import { SignInButton } from '../SignInButton/index'
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss'

export function Header() {

    return (
      <header className={ styles.headerContainer }>
          <div className={ styles.headerContent }>
              <img src="/images/logo.svg" alt="ig.news"/>
              <nav>
                <ActiveLink activeClassName={styles.active} href="/">
                  <a>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                  <a>Posts</a>
                </ActiveLink>
              </nav>
              <SignInButton />
          </div>
      </header>  
    );
}
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Search from './Search';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const [search, setSearch] = useState(false);

  const showExplore = (title.includes('Explorar') && !title.includes('Origem'));
  const showRecipes = (title.includes('Receitas') || title.includes('Perfil'));

  function showSearch() {
    setSearch(!search);
  }
  return (
    <div>
      <Link to="/perfil">
        <img src={ profileIcon } data-testid="profile-top-btn" alt="Profile Avatar" />
      </Link>
      <h2 data-testid="page-title">{title}</h2>
      { !showExplore && !showRecipes
        ? (
          <img
            role="presentation"
            onClick={ showSearch }
            src={ searchIcon }
            data-testid="search-top-btn"
            alt="Search Icon"
          />
        ) : '' }
      {search && <Search />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
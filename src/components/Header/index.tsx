import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header1, Li, Logout } from './styles';

type HeaderProps = {
  userLoggedIn: boolean;
};

type LoginFormState = {
  email: string;
  password: string;
};

type NewAdminFormState = {
  name: string;
  email: string;
  password: string;
};

const Header: React.FC<HeaderProps> = ({ userLoggedIn }) => {
  const [loginForm, setLoginForm] = useState<LoginFormState>({
    email: '',
    password: '',
  });
  const [newAdminForm, setNewAdminForm] = useState<NewAdminFormState>({
    name: '',
    email: '',
    password: '',
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogout, setShowLogout] = useState(true);

  const navigate = useNavigate();

  const handleUserListClick = () => {
    navigate('/lista-de-usuarios');
  };

  const handleLoginFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNewAdminFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewAdminForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-ecommerce-livraria.onrender.com/user/login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginForm.email, password: loginForm.password }),
      });

      if (response.ok) {
        const data = await response.json();
        const isAdminUser = data.isAdmin;

        setIsAdmin(isAdminUser);
        setShowLogout(true);
        navigate('/homeadm');
      } else {
        const errorData = await response.json();
        console.log('Erro de login:', errorData.message);
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  const handleAdminLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-ecommerce-livraria.onrender.com/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginForm.email,
          password: loginForm.password,
          isAdmin: true,
        }),
      });

      if (response.ok) {
        setIsAdmin(true);
        setShowLogout(true);
        navigate('/homeadm');
      } else {
        const errorData = await response.json();
        console.log('Erro de login:', errorData.message);
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  const handleAdminRegistration = async () => {
    if (userLoggedIn) {
      navigate('/cadastroadm');
    } else {
      navigate('/loginadm');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://api-ecommerce-livraria.onrender.com/user/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsAdmin(false);
        setShowLogout(false);
        navigate('/');
      } else {
        const errorData = await response.json();
        console.log('Erro ao fazer logout:', errorData.message);
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  const handleNewAdminSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('https://api-ecommerce-livraria.onrender.com/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newAdminForm.name,
          email: newAdminForm.email,
          password: newAdminForm.password,
        }),
      });

      if (response.ok) {
        alert('Novo adm cadastrado!');
      } else {
        const errorData = await response.json();
        console.log('Erro ao cadastrar novo adm:', errorData.message);
      }
    } catch (error) {
      console.log('Erro na requisição:', error);
    }
  };

  const handleAddProduct = () => {
    window.location.href = '/Cadastro-de-produto';
  };

  useEffect(() => {
    setShowLogout(userLoggedIn);
  }, [userLoggedIn]);

  return (
    <Header1>
      <nav>
        <ul>
          {userLoggedIn && (
            <Li>
              <a href="/" className="text-white font-bold">
                Bookstore
              </a>
              <button className="text-white font-bold" onClick={() => navigate('/homeadm')}>
                Painel
              </button>
              <button className="text-white font-bold" onClick={handleUserListClick}>
                Usuários
              </button>
              <button className="text-white font-bold" onClick={handleAdminRegistration}>
                Cadastrar novo adm
              </button>
              <button className="text-white font-bold" onClick={handleAddProduct}>
                Cadastrar Produto
              </button>
            </Li>
          )}
        </ul>
      </nav>

      {showLogout && userLoggedIn && (
        <div>
          <Logout className="text-white font-bold" onClick={handleLogout}>
            Logout
          </Logout>
        </div>
      )}

      {!userLoggedIn && (
        <div>
          <form onSubmit={handleLoginSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={loginForm.email} onChange={handleLoginFormChange} />
            </label>
            <label>
              Senha:
              <input type="password" name="password" value={loginForm.password} onChange={handleLoginFormChange} />
            </label>
            <button type="submit">Entrar</button>
          </form>
        </div>
      )}

      {isAdmin && (
        <div>
          <form onSubmit={handleNewAdminSubmit}>
            <label>
              Nome:
              <input type="text" name="name" value={newAdminForm.name} onChange={handleNewAdminFormChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={newAdminForm.email} onChange={handleNewAdminFormChange} />
            </label>
            <label>
              Senha:
              <input type="password" name="password" value={newAdminForm.password} onChange={handleNewAdminFormChange} />
            </label>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      )}
    </Header1>
  );
};

export default Header;

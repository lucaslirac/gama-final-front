import { Api } from "../../service/api";



export const getUserById = async id => {
	try {
		const response = await Api.get(`/user/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
		alert('Erro no getUserById');
		return { status: error.response.status };
	}
};

export const createUser = async user => {
	try {
		const { data, status } = await Api.post('/user/', user);
		alert('Usuário cadastrado com sucesso!');
		return { data, status };
	} catch (error) {
		console.error(error);
		return { status: error.response.status };
	}
};

export const updateUser = async (id, user) => {
	try {
		const response = await Api.put(`/user/${id}`, user);
		alert('Perfil atualizado com sucesso!');
		return response;
	} catch (error) {
		console.error(error);
		return { status: error.response.status };
	}
};  
  
export const loginUser = async user => {
	try {
		const response = await Api.post('/login', user);
		return response;
	} catch (error) { 
		console.error(error);
		alert('Erro ao efetuar login');
		return { status: error.response.status };
	}
};
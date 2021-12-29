// Импортируем React
import React from 'react';
// Импортируем css файл
import './LoginForm.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: true
        }
    }
    // события при изменении Input
    onChange = (event) => {
        // получаем userName и записываем в localStorage
        localStorage.setItem('userName', event.target.value.trim())
        // валидация userName
        const re = /^[а-яА-ЯёЁ\s]+$/
        if (re.test(localStorage.getItem('userName'))) {
            this.setState({
                disabled: false // кнопка активна
            })
        } else {
            this.setState({
                disabled: true // кнопка заблокирована
            })
        }
    }
    render() {
        return (
            <div className={'wrapper'}>
                <form className={'login-form'} action={'/tasks'}>
                    <div className={'login-form__title'}>Здравствуйте, введите ваше имя</div>
                    <input className={'login-form__input'} type="text" onChange={this.onChange} placeholder='Имя'/>
                    <button className={'login-form__button'} type='submit' disabled={this.state.disabled}>Вход</button>
                </form>
            </div>
        )
    }
}

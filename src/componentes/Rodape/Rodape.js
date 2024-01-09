import './Rodape.css';

const Rodape = (Rodape) => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/facebook.png" alt=""/>
                        </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="Logo do Twitter"/>
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="Logo do Instagram"/>
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvidor por Vinicius Polonio
            </p>
        </section>
    </footer>)
}

export default Rodape
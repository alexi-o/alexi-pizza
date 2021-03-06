import Title from './Title';
export default function Pizza() {
    return (
        <div>
            <Title title="Pizza" />
            <div className="container">
                <div className="crust">
                    <div className="pep"></div>
                    <div className="face">
                        <div className="eye"></div>
                        <div className="mouth"></div>
                    </div>
                </div>
                <div className="melt"></div>
            </div>
        </div>
    )
};
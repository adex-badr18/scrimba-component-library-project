import Banner from "./Banner";

export default function Banners() {
    const types = ['success', 'warning', 'error', 'neutral'];

    return (
        <section id='banners' className="banners-container">
            <h1 className="banners-title">BANNERS</h1>

            <h3 className="multiline-title">MULTI LINE</h3>
            <div className="multiline-banners">
                {
                    types.map(type => (
                        <div key={type} className="banner-container">
                            <h4 className="type-title">{type.toUpperCase()}</h4>
                            <Banner type={type}>
                                <h1>
                                    {
                                        type === 'success' ? 'Congratulations!' :
                                            type === 'warning' ? 'Attention' :
                                                type === 'error' ? 'There is a problem with your application' :
                                                    'Update available'
                                    }
                                </h1>
                                <p>Lorem ipsum fdjnjn ylasdgwj jksne fenudbe uefhuewfuewb yegyeowq udvuqppit wyvnkce kbgxxzas fndj cefsg</p>
                            </Banner>
                        </div>
                    ))
                }
            </div>

            <h3 className="singleline-title">SINGLE LINE</h3>
            <div className="singleline-banners">
                {
                    types.map(type => (
                        <div key={type} className="banner-container">
                            <h4 className="type-title">{type.toUpperCase()}</h4>
                            <Banner type={type}>
                                <h1>
                                    {
                                        type === 'success' ? 'Congratulations!' :
                                        type === 'warning' ? 'Attention' :
                                        type === 'error' ? 'There is a problem with your application' :
                                        'Update available'
                                    }
                                </h1>
                            </Banner>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
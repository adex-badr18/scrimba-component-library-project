import Banner from "./Banner";

export default function Banners() {
    const types = ['success', 'warning', 'error', 'neutral'];

    return (
        <section id='banners' className="banners-container">
            <h1 className="title banners-title">BANNERS</h1>

            <h3 className="title multiline-title">MULTI LINE</h3>
            <div className="multiline-banners">
                {
                    types.map(type => (
                        <div key={type} className="banner-container">
                            <h3 className="title type-title">{type.toUpperCase()}</h3>
                            <Banner type={type}>
                                <div className="banner-children">
                                    <h5>
                                        {
                                            type === 'success' ? 'Congratulations!' :
                                                type === 'warning' ? 'Attention' :
                                                    type === 'error' ? 'There is a problem with your application' :
                                                        'Update available'
                                        }
                                    </h5>
                                    <p>Lorem ipsum fdjnjn ylasdgwj jksne fenudbe uefhuewfuewb yegyeowq udvuqppit wyvnkce kbgxxzas fndj cefsg</p>
                                </div>
                            </Banner>

                            <Banner type={type}>
                                <div className="banner-children">
                                    <h5>
                                        {
                                            type === 'success' ? 'Congratulations!' :
                                                type === 'warning' ? 'Attention' :
                                                    type === 'error' ? 'There is a problem with your application' :
                                                        'Update available'
                                        }
                                    </h5>
                                </div>
                            </Banner>
                        </div>
                    ))
                }
            </div>

            {/* <h3 className="title singleline-title">SINGLE LINE</h3>
            <div className="singleline-banners">
                {
                    types.map(type => (
                        <div key={type} className="banner-container singleline-container">
                            <Banner type={type}>
                                <div className="banner-children">
                                    <h5>
                                        {
                                            type === 'success' ? 'Congratulations!' :
                                                type === 'warning' ? 'Attention' :
                                                    type === 'error' ? 'There is a problem with your application' :
                                                        'Update available'
                                        }
                                    </h5>
                                </div>
                            </Banner>
                        </div>
                    ))
                }
            </div> */}
        </section>
    )
}
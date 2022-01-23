import "./App.css";

import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const messages = {
	"tr-TR": {
		title: "Merhaba Dünya",
		description: "{count} yeni mesajınız var", // parametre ile geliyor --> count
	},
	"en-US": {
		title: "Hello World",
		description: "You have {count} new messages",
	},
};

function App() {
	const isLocale = localStorage.getItem("locale"); // locale tanımı var mı? önceden seçilen dil sayfa yenilendiğinde de gelsin.
	const defaultLocale = isLocale ? isLocale : navigator.language; // eger locale tanımı varsa o çalışsın yoksa navigaoter altındaki default değeri gelsin.
	const [locale, setLocale] = useState(defaultLocale);

	useEffect(() => {
		localStorage.setItem("locale", locale);//dil değiştiği anda yaz(locale değiştiğinde)
	}, [locale]);

	return (
		<div className="App">
			<div className="btnBox">
			<button onClick={() => setLocale("tr-TR")} className="btn">TR</button>
			<button onClick={() => setLocale("en-US")} className="btn">EN</button>
			</div>
			<div className="intl">
			<IntlProvider locale={locale} messages={messages[locale]}>
				<FormattedMessage id="title" />
				<p>
					<FormattedMessage id="description" values={{ count: 7 }} /> {/*parametre geçmek */}
				</p>

			</IntlProvider>
		</div></div>
	);
}

export default App;

import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

const UIKit: React.FC = () => {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-12">
            <header className="border-b pb-6">
                <h1 className="text-4xl font-extrabold text-slate-900">UI Kit</h1>
                <p className="text-slate-500 mt-2">Reusable components for LAB-4</p>
            </header>

            {/* --- BUTTONS --- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">Buttons</h2>

                <div className="flex flex-col gap-6">
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Variants</h3>
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="danger">Danger</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Sizes</h3>
                        <div className="flex flex-wrap items-end gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">Inputs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                    <Input
                        label="Normal Input"
                        placeholder="Adınızı girin..."
                    />
                    <Input
                        label="Hatali Input"
                        error="Bu alan zorunludur"
                        defaultValue="Geçersiz değer"
                    />
                    <Input
                        label="Help Text"
                        helpText="E-posta adresinizi girin"
                        type="email"
                        placeholder="ornek@mail.com"
                    />
                    <Input
                        label="Disabled Input"
                        disabled
                        value="Düzenlenemez"
                    />
                </div>
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card variant="elevated" title="Elevated Card">
                        Gölge ile yükseltilmiş kart. Modern ve temiz bir görünüm için idealdir.
                    </Card>
                    <Card variant="outlined" title="Outlined Card">
                        Çerçeveli kart. Daha sade ve az vurgulanması gereken alanlar için.
                    </Card>
                    <Card variant="filled" title="Filled Card">
                        Dolgulu arka plan. İçerik bloklarını birbirinden ayırmak için kullanılır.
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2 text-primary">Alerts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                    <Alert variant="info" title="Bilgi">
                        Mavi renkli bilgilendirme mesajı.
                    </Alert>
                    <Alert variant="success" title="Başarılı">
                        İşlem başarıyla tamamlandı. Yeşil tonları kullanılır.
                    </Alert>
                    <Alert variant="warning" title="Uyarı">
                        Dikkat edilmesi gereken durumlar için turuncu tonları.
                    </Alert>
                    <Alert variant="error" title="Hata" dismissible>
                        Bir sorun oluştu. Kapatılabilir bir hata mesajı.
                    </Alert>
                </div>
            </section>
        </div>
    );
};

export default UIKit;

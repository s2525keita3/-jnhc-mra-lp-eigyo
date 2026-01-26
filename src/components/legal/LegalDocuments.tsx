export const LegalDocuments = () => {
    return (
        <section className="bg-slate-100 py-12 text-text-tertiary text-xs border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
                <h3 className="font-bold text-slate-400 mb-4 text-center">重要事項・法的表記</h3>
                
                <details className="group bg-white rounded-xl border border-slate-200" id="tokushoho">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-slate-50">
                        特定商取引法に基づく表記
                        <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-slate-200 space-y-2 leading-relaxed">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <div className="font-bold bg-slate-50 p-1">販売業者</div>
                            <div className="md:col-span-3 p-1">一般社団法人 全国訪問看護経営研究協会</div>
                            <div className="font-bold bg-slate-50 p-1">運営統括責任者</div>
                            <div className="md:col-span-3 p-1">渋谷 慶太</div>
                            <div className="font-bold bg-slate-50 p-1">所在地</div>
                            <div className="md:col-span-3 p-1">〒231-0064 神奈川県横浜市中区野毛町2-90桜木町スカイハイツ405</div>
                            <div className="font-bold bg-slate-50 p-1">電話番号</div>
                            <div className="md:col-span-3 p-1">045-3451-0083（受付時間：平日09:00-18:00）</div>
                            <div className="font-bold bg-slate-50 p-1">メールアドレス</div>
                            <div className="md:col-span-3 p-1">info@jnhc-mra.or.jp</div>
                            <div className="font-bold bg-slate-50 p-1">販売価格</div>
                            <div className="md:col-span-3 p-1">300,000円（税別）〜 ※詳細は無料個別相談にてご案内</div>
                            <div className="font-bold bg-slate-50 p-1">商品代金以外の必要料金</div>
                            <div className="md:col-span-3 p-1">消費税、インターネット接続にかかる通信回線等の諸費用</div>
                            <div className="font-bold bg-slate-50 p-1">お支払い方法</div>
                            <div className="md:col-span-3 p-1">銀行振込、クレジットカード決済</div>
                            <div className="font-bold bg-slate-50 p-1">お支払い時期</div>
                            <div className="md:col-span-3 p-1">一括払い：契約締結後7日以内 / 分割払い：契約締結後および翌月以降毎月</div>
                            <div className="font-bold bg-slate-50 p-1">サービスの提供時期</div>
                            <div className="md:col-span-3 p-1">お支払い確認後、プログラム開始日よりサービスを提供いたします。</div>
                            <div className="font-bold bg-slate-50 p-1">返品・交換・キャンセル</div>
                            <div className="md:col-span-3 p-1">本サービスはコンサルティング・伴走型サービスの性質上、サービス提供開始後の返品・返金はお受けしておりません。ご不明点は無料個別相談にて事前にご確認ください。</div>
                        </div>
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-slate-200" id="terms">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-slate-50">
                        利用規約
                        <span className="text-text-tertiary group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-slate-200 h-64 overflow-y-auto leading-relaxed scrollbar-thin">
                        <p className="mb-2 font-bold">第1条（適用）</p>
                        <p className="mb-2">本規約は、一般社団法人 全国訪問看護経営研究協会（以下「当協会」）が提供する「営業力強化 3ヶ月伴走型プログラム」（以下「本サービス」）の利用条件を定めるものです。</p>
                        
                        <p className="mb-2 font-bold">第2条（契約の成立）</p>
                        <p className="mb-2">利用者は、本規約に同意の上、当協会所定の方法で申し込みを行い、当協会がこれを承認し、料金の支払いが完了した時点で契約が成立するものとします。</p>
                        
                        <p className="mb-2 font-bold">第3条（サービス内容）</p>
                        <p className="mb-2">本サービスは、3ヶ月間の営業力強化を目的とした伴走型コンサルティングプログラムです。具体的なサービス内容は、集団MTG（月1回60分）、チャットサポート、動画コンテンツの提供、成果物の納品を含みます。</p>
                        
                        <p className="mb-2 font-bold">第4条（利用料金および支払い）</p>
                        <p className="mb-2">利用者は、所定の料金を支払うものとします。一括払いまたは分割払いを選択できます。分割払いの場合、総額が一括払いと異なる場合があります。</p>
                        
                        <p className="mb-2 font-bold">第5条（契約期間）</p>
                        <p className="mb-2">本サービスの契約期間は3ヶ月間とします。契約期間中の中途解約による返金は原則として行いません。</p>
                        
                        <p className="mb-2 font-bold">第6条（禁止事項）</p>
                        <p className="mb-2">利用者は、本サービスで提供されるコンテンツ・資料を第三者に譲渡・貸与・転売・公衆送信してはなりません。ただし、同一法人内のスタッフ間での共有はこの限りではありません。</p>
                        
                        <p className="mb-2 font-bold">第7条（成果に関する免責）</p>
                        <p className="mb-2">当協会は、本サービスの利用による特定の成果（売上増加、利用者獲得等）を保証するものではありません。成果は利用者の取り組み状況や事業環境等により異なります。</p>
                        
                        <p className="mb-2 font-bold">第8条（免責事項）</p>
                        <p className="mb-2">当協会は、本サービスの利用により利用者に生じた損害について、当協会の故意または重過失による場合を除き、一切の責任を負いません。</p>
                        
                        <p className="mb-2 font-bold">第9条（規約の変更）</p>
                        <p className="mb-2">当協会は、必要と判断した場合には、利用者に通知することなく本規約を変更することがあります。</p>
                        
                        <p className="mt-4 text-slate-400">制定日：2024年12月1日</p>
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-slate-200" id="privacy">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-slate-50">
                        プライバシーポリシー
                        <span className="text-text-tertiary group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-slate-200 space-y-2 leading-relaxed">
                         <p>当協会は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
                         
                         <p className="font-bold mt-2">1. 個人情報の管理</p>
                         <p>当協会は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
                         
                         <p className="font-bold mt-2">2. 個人情報の利用目的</p>
                         <p>お客さまからお預かりした個人情報は、以下の目的で利用いたします。</p>
                         <ul className="list-disc list-inside pl-4">
                            <li>本サービスの提供・運営</li>
                            <li>お問い合わせへの対応</li>
                            <li>サービスに関するご案内・情報提供</li>
                            <li>請求・決済処理</li>
                         </ul>
                         
                         <p className="font-bold mt-2">3. 個人情報の第三者への開示・提供の禁止</p>
                         <p>当協会は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
                         <ul className="list-disc list-inside pl-4">
                            <li>お客さまの同意がある場合</li>
                            <li>法令に基づき開示することが必要である場合</li>
                            <li>決済代行会社（Stripe等）への必要最低限の情報提供</li>
                         </ul>
                         
                         <p className="font-bold mt-2">4. 個人情報の安全対策</p>
                         <p>当協会は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
                         
                         <p className="font-bold mt-2">5. お問い合わせ窓口</p>
                         <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください。</p>
                         <p>一般社団法人 全国訪問看護経営研究協会<br />メール：info@jnhc-mra.or.jp</p>
                    </div>
                </details>
            </div>
        </section>
    );
};

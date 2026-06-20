import React, { JSX } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { SectionTitle } from '@/components/core'
import { AppConfig } from '@/configs'

const sections = [
  {
    title: '1. 収集する情報',
    content: `当社は、以下の情報を収集することがあります。\n\n・お名前・メールアドレス・電話番号などの連絡先情報\n・お問い合わせや取引に関する情報\n・ウェブサイトの利用状況（IPアドレス、ブラウザ情報、アクセスページなど）\n・Cookieおよびトラッキング技術を通じた情報`,
  },
  {
    title: '2. 情報の利用目的',
    content: `収集した個人情報は、以下の目的で利用します。\n\n・サービスの提供および改善\n・お問い合わせへの対応\n・ニュースレターやマーケティング情報の送信（同意がある場合）\n・法的義務の遵守\n・不正利用の防止およびセキュリティの確保`,
  },
  {
    title: '3. 情報の共有',
    content: `当社は、以下の場合を除き、お客様の個人情報を第三者と共有しません。\n\n・お客様の同意がある場合\n・業務委託先（情報保護契約を締結した場合に限る）\n・法令に基づく開示が必要な場合\n・当社の権利・財産・安全を保護するために必要な場合`,
  },
  {
    title: '4. Cookieについて',
    content: `当社のウェブサイトはCookieを使用しています。Cookieは、ウェブサイトの利便性向上やアクセス解析のために利用されます。ブラウザの設定によりCookieを無効にすることができますが、一部機能が利用できなくなる場合があります。`,
  },
  {
    title: '5. データの保管と保護',
    content: `お客様の個人情報は、不正アクセス・紛失・破壊・改ざんなどから保護するため、適切な技術的・組織的セキュリティ対策を講じています。ただし、インターネット上での送受信において完全なセキュリティを保証することはできません。`,
  },
  {
    title: '6. お客様の権利',
    content: `お客様は以下の権利を有しています。\n\n・保有する個人情報へのアクセス・訂正の請求\n・個人情報の削除の請求\n・マーケティング目的での情報利用に対するオプトアウト\n・データポータビリティの請求\n\nご要望の場合は、下記連絡先までお問い合わせください。`,
  },
  {
    title: '7. 外部リンク',
    content: `当社のウェブサイトには、外部サイトへのリンクが含まれる場合があります。外部サイトのプライバシーポリシーについて当社は責任を負いません。外部サイトをご利用の際は、各サイトのプライバシーポリシーをご確認ください。`,
  },
  {
    title: '8. 本ポリシーの変更',
    content: `当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、本ページに掲載した時点から有効となります。重要な変更がある場合は、ウェブサイト上でお知らせします。`,
  },
  {
    title: '9. お問い合わせ',
    content: `本プライバシーポリシーに関するご質問・ご意見は、下記の連絡先までお寄せください。\n\nメール：hello@example.com\n電話：+62 8881212121212\n住所：123 Business St., Suite 456, City, State, ZIP Code, Country`,
  },
]

const PrivacyPolicyPage = (): JSX.Element => {
  return (
    <Box sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 10, md: 16 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth='md'>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <SectionTitle>法的情報</SectionTitle>
          <Typography variant='h1' sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, mb: 2 }}>
            プライバシーポリシー
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 15 }}>
            最終更新日：2025年6月20日
          </Typography>
        </Box>

        <Box
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            backgroundColor: 'background.paper',
            boxShadow: 1,
          }}
        >
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 4, fontSize: 15 }}>
            {AppConfig.appName}（以下「当社」）は、お客様のプライバシーを尊重し、個人情報の保護に努めています。
            本プライバシーポリシーは、当社がどのような情報を収集し、どのように利用・管理するかについて説明します。
            当社のサービスをご利用いただくことで、本ポリシーの内容にご同意いただいたものとみなします。
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {sections.map((section, index) => (
            <Box key={index} sx={{ mb: 5 }}>
              <Typography variant='h5' sx={{ fontWeight: 700, mb: 2 }}>
                {section.title}
              </Typography>
              {section.content.split('\n\n').map((para, i) => (
                <Typography key={i} sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 1.5, fontSize: 15, whiteSpace: 'pre-line' }}>
                  {para}
                </Typography>
              ))}
              {index < sections.length - 1 && <Divider sx={{ mt: 4 }} />}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default PrivacyPolicyPage

import React, { JSX } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { SectionTitle } from '@/components/core'
import { AppConfig } from '@/configs'

const sections = [
  {
    title: '1. 利用規約への同意',
    content: `本利用規約（以下「本規約」）は、${AppConfig.appName}（以下「当社」）が提供するすべてのサービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただくことで、本規約に同意したものとみなします。同意いただけない場合は、本サービスのご利用をお控えください。`,
  },
  {
    title: '2. サービスの提供',
    content: `当社は、Webデザイン・開発、デジタルマーケティング、ブランディング、コンサルティングなどのサービスを提供します。\n\nサービスの内容・範囲・料金は、別途締結する個別契約または発注書によって定まります。当社は、事前の通知なくサービスの内容を変更・停止・終了する権利を有します。`,
  },
  {
    title: '3. 利用者の義務',
    content: `本サービスのご利用にあたり、以下の事項を遵守していただく必要があります。\n\n・正確かつ最新の情報を提供すること\n・本サービスを違法な目的または不正な方法で使用しないこと\n・他者の知的財産権・プライバシー・権利を侵害しないこと\n・当社のシステムやネットワークに対する攻撃・妨害行為を行わないこと\n・スパム・フィッシング・マルウェアの配布など有害な行為を行わないこと`,
  },
  {
    title: '4. 知的財産権',
    content: `本サービスに含まれるすべてのコンテンツ（テキスト・画像・ロゴ・デザイン・ソフトウェアなど）の知的財産権は、当社または正当な権利者に帰属します。\n\nお客様のために制作した成果物の著作権は、全額支払い完了後にお客様に移転するものとします。ただし、当社が独自に開発したツール・フレームワーク・汎用コードについては、当社が引き続き権利を保有します。`,
  },
  {
    title: '5. 支払い条件',
    content: `サービス料金は、個別契約に定める支払いスケジュールに従ってお支払いください。\n\n・請求書の発行から30日以内にお支払いください\n・支払い遅延が生じた場合、年率12%の遅延損害金が発生する場合があります\n・支払いが完了するまで、成果物の所有権は当社に帰属します\n・見積金額を超える追加作業については、事前にご承認を得た上で別途請求いたします`,
  },
  {
    title: '6. 秘密保持',
    content: `当社は、業務上知り得たお客様の機密情報を第三者に開示しません。お客様も、当社が提供する機密情報（価格体系・プロセス・技術情報など）を第三者に開示しないことに同意するものとします。\n\n本秘密保持義務は、契約終了後も2年間存続するものとします。`,
  },
  {
    title: '7. 免責事項',
    content: `本サービスは「現状有姿」で提供されます。当社は、以下について一切の保証を行いません。\n\n・サービスが中断なく利用できること\n・サービスがエラーフリーであること\n・特定の目的への適合性\n\n当社の責任は、いかなる場合においても、当該サービスの支払い済み料金を上限とします。`,
  },
  {
    title: '8. 契約の解除',
    content: `・お客様：30日前の書面による通知をもって、いつでも契約を解除できます。解除時点までの作業に対する料金はお支払いいただきます。\n\n・当社：お客様が本規約に違反した場合、または支払いが滞った場合、当社は即時に契約を解除する権利を有します。`,
  },
  {
    title: '9. 準拠法・紛争解決',
    content: `本規約は日本法に準拠し、解釈されます。本規約に関して生じた紛争については、当社所在地を管轄する裁判所を専属的合意管轄裁判所とします。\n\nまず誠意をもって協議による解決を試みるものとし、60日以内に解決しない場合は法的手段を取ることができます。`,
  },
  {
    title: '10. 本規約の変更',
    content: `当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本ページに掲載した時点から有効となります。重要な変更がある場合は、ウェブサイト上でお知らせするか、登録されたメールアドレスにご連絡します。\n\n変更後も本サービスをご利用いただいた場合、変更後の規約に同意したものとみなします。`,
  },
  {
    title: '11. お問い合わせ',
    content: `本利用規約に関するご質問は、下記の連絡先までお寄せください。\n\nメール：hello@example.com\n電話：+62 8881212121212\n住所：123 Business St., Suite 456, City, State, ZIP Code, Country`,
  },
]

const TermsOfServicesPage = (): JSX.Element => {
  return (
    <Box sx={{ pt: { xs: 14, md: 16 }, pb: { xs: 10, md: 16 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Container maxWidth='md'>
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <SectionTitle>法的情報</SectionTitle>
          <Typography variant='h1' sx={{ fontSize: { xs: 28, md: 42 }, fontWeight: 800, mb: 2 }}>
            利用規約
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
            本ウェブサイトをご利用いただく前に、以下の利用規約をよくお読みください。
            本サービスにアクセスまたは利用することで、本規約に拘束されることに同意したものとみなします。
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

export default TermsOfServicesPage

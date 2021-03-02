<template>
  <Section class="Honor">
    <template #header>
      <h2>Awards & Certificates</h2>
    </template>

    <CardA1
      id="award-fgc"
      :img-src="require('@/assets/img/award/fgc_logo.png?resize').src"
    >
      <header>
        <h4>Top 2 Short Answer, Top 3 Multiple Choice, Out of 143 Teams.</h4>
        <p>
          2018–2019, Formosa Grand Challenge (Chinese TOEFL-like listening
          comprehension QA).
          <IconButton
            size="xs"
            variant="outline-primary"
            href="https://www.most.gov.tw/bio/ch/detail?article_uid=8f0715a3-fcf3-4ffb-9920-6245ec14e77b"
            target="_blank"
            fa-icon="external-link-alt"
            fa-style="fas"
          >
            Official Post
          </IconButton>
        </p>
      </header>
    </CardA1>

    <CardA1 id="award-tjjw-jsam-2016" icon="award">
      <header>
        <h4>Presentation Excellence Award</h4>
        <p>
          2016, 7th Taiwan-Japan Joint Workshop for Young Scholars in Applied
          Mathematics.
          <IconButton
            size="xs"
            variant="outline-primary"
            fa-icon="level-up-alt"
            fa-style="fas"
            @click.native="
              $parent.scrollTo('publication', '#publication-tjjw-jsam-2016')
            "
          >
            Related Workshop
          </IconButton>
        </p>
      </header>
    </CardA1>

    <CardA1
      id="award-academic-ntu"
      :img-src="require('@/assets/img/logo/ntu_logo.png?resize').src"
    >
      <header>
        <h4>Top 1 Academic Excellence Award</h4>
        <p>Fall 2011, Department of Mathematics, National Taiwan University</p>
      </header>
    </CardA1>
  </Section>
</template>

<script>
export default {};
</script>

<template>
  <!-- 书本缩略图+书名+简介基本的组件 -->
  <v-card
    class="ma-4"
    width="344"
    :to="`/book/${bookId}`"
  >
    <v-img
      :src="cover"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ description }}
    </v-card-subtitle>

    <v-card-actions style="margin-top: -16px">
      <v-list-item class="grow">
        <v-row
          align="center"
          justify="end"
        >
          <v-chip
            color="green"
            text-color="white"
          >
            <v-avatar left>
              <v-icon>mdi-pencil-circle</v-icon>
            </v-avatar>
            {{ author }}
          </v-chip>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
/**
 * @property {Number} id 书本的ID
 */
export default {
  name: 'BookItem',
  props: {
    cover: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    bookId: {
      type: Number,
      required: true
    }
  }
}
</script>
